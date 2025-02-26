import Navbar from "./components/Navbar"
import AddUser from "./components/AddUser"
import Overview from "./components/Overview"
import UserList from "./components/UserList"
import EditUser from "./components/EditUser"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Overview/>} />
          <Route path='/list' element={<UserList/>} />
          <Route path='/add' element={<AddUser/>} />
          <Route path='/edit/:userId' element={<EditUser/>} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
