import {Routes,Route} from "react-router-dom";
import Dashboard from "./page/Dashboard"
import AddProduct from "./page/AddProduct"
import EditProduct from "./page/EditProduct"
import User from "./page/User"
import EditUser from "./page/EditUser"
import Product from "./page/Product"
import Login from "./page/Login"
import Register from "./page/Register"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import {useState} from "react"
function App() {
const [toggle,setToggle]=useState(false)
  
  const handleToggle=()=>{
    setToggle(false)
  }
  return (
    <>
     <div className="w-screen min-h-screen bg-bgPrimary">
      <Navbar toggle={toggle} eventOpen={()=>setToggle(true)}/>
      <Sidebar toggle={toggle} handleToggle={handleToggle} eventClose={()=>setToggle(false)}/>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/dashboard" element ={<Dashboard/>}/>
        <Route path="/user" element ={<User/>}/>
        <Route path="/user/edit/:id" element ={<EditUser/>}/>
        <Route path="/product/edit/:id" element ={<EditProduct/>}/>
        <Route path="/product/add" element ={<AddProduct/>}/>
        <Route path="/product" element ={<Product/>}/>
        <Route path="/user/add" element ={<Register/>}/>
      </Routes>
     </div>
   </>
  )
}

export default App
