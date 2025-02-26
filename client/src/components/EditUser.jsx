import { useState, useEffect } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import {editUser, loadUser} from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'


const FormContainer = styled(FormGroup)`
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  & > div {
    margin-top: 25px;
  }
`; 

const defaultObj = {
  name: '',
  username: '',
  email: '',
  phone: '',
}

function EditUser() {

  const [user, setUser] = useState(defaultObj)

  const navigate = useNavigate();

  const {userId} = useParams();

   useEffect(()=>{
    if (userId) {
        loadUserDetails();
      }
  }, []);

  const loadUserDetails = async () => {
    try {
      const response = await loadUser(userId);
      console.log("Fetched User Data:", response.data);
  
      if (Array.isArray(response.data) && response.data.length > 0) {
        const userData = response.data[0]; // Take the first object from the array
  
        setUser({
          name: userData.name || '',
          username: userData.username || '',
          email: userData.email || '',
          phone: userData.phone || '',
        });
      } else {
        console.error("User data is empty or not in expected format.");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  

  const onValueChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }
  const editUserDetails = async () => {
    await editUser(user, userId);
    navigate('/list');
  }

  return (
    <FormContainer>
      <Typography variant='h4' className='text-customBlue'>Edit User</Typography>
      
      {!user.name ? (
        <Typography>Loading user data...</Typography>
      ) : (
        <>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={onValueChange} name='name' value={user.name} />
          </FormControl>
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={onValueChange} name='username' value={user.username} />
          </FormControl>
          <FormControl>
            <InputLabel>E-mail</InputLabel>
            <Input onChange={onValueChange} name='email' value={user.email} />
          </FormControl>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={onValueChange} name='phone' value={user.phone} />
          </FormControl>
          <FormControl>
            <Button variant='outlined' onClick={() => editUserDetails()}> Edit User</Button>
          </FormControl>
        </>
      )}
    </FormContainer>
  );
  
}

export default EditUser