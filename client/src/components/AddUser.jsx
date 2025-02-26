import { useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import {addUser} from '../service/api'
import { useNavigate } from 'react-router-dom'

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

function AddUser() {

  const [user, setUser] = useState(defaultObj)

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }
  const addUserDetails = async () => {
    await addUser(user);
    navigate('/list');
  }

  return (
    <FormContainer>
      <Typography variant='h4' className='text-customBlue'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name'/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='username'/>
      </FormControl>
      <FormControl>
        <InputLabel>E-mail</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone'/>
      </FormControl>
      <FormControl>
        <Button variant='outlined' onClick={ () => addUserDetails() }> Add User</Button>
      </FormControl>
    </FormContainer>
  )
}

export default AddUser