import {useEffect, useState } from 'react'
import {Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';
import { getUser, deleteUser } from '../service/api'; 
import {Link} from 'react-router-dom'

const StyledTable = styled(Table)`
  width: 80%;
  margin: 30px auto 0 auto;
`
const StyledRow = styled(TableRow)`
  background: #8AAAE5;
  & > th{
    color: white;
    font-size: 20px;
  }
`
const StyledRow2 = styled(TableRow)`
  & > td{
    font-size: 18px;
  }
`

function UserList() {
  
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers();
  },[])
  
  const getAllUsers = async()=>{
    let response = await getUser();
    setUsers(response.data);
  }

  const deleteUserDetails = async(userId)=>{ 
    await deleteUser(userId);
    getAllUsers();
  }

  return (
    <StyledTable>
      <TableHead>
        <StyledRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </StyledRow>
      </TableHead>
      <TableBody>
        {
          users.map(user=>(
            <StyledRow2>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{ marginRight:10 }} color='success' component={Link} to={`/edit/${user.userId}`}>Edit</Button>
                <Button variant="outlined" color='error' onClick={()=> deleteUserDetails(user.userId)}>Delete</Button>
              </TableCell>
            </StyledRow2>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default UserList