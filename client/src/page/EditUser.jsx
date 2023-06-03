import {useState,useEffect} from "react"
import axios from "axios"
import {useNavigate,useParams} from "react-router-dom"
export default function EditUser(){
const [name,setName]=useState(null)
const [email,setEmail]=useState(null)
const [password,setPassword]=useState(null)
const [confPassword,setConfPassword]=useState(null)
const [role,setRole]=useState(null)
const navigate=useNavigate()
const {id}=useParams()

useEffect(()=>{
  getUser()
},[])

const getUser=async()=>{
    try{
    const response=await axios.get(`http://localhost:3000/users/${id}`)
    setName(response.data.name)
    setEmail(response.data.email)
    setRole(response.data.role)
    }catch(err){
      console.log(err)
    }
  }
  
  const handleUpdateUser=async(e)=>{
    e.preventDefault()
    console.table({name,email,password,confPassword,role})
    try{
      await axios.patch(`http://localhost:3000/users/${id}`,{
        name:name,
        email:email,
        password:password,
        confPassword:confPassword,
        role:role
      })
      navigate("/user")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="w-[100%] min-h-screen flex items-center justify-center flex-col text-txtPrimary">
      <div className="bg-bgSecond w-[80%] h-full flex flex-col items-center rounded border-gray-200 border p-5">
        <div className="font-bold text-3xl mb-5">
          <h1>Edit user</h1>
        </div>
        <form onSubmit={handleUpdateUser} className="w-[100%] h-full flex flex-col items-center">
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-2">
          <input type="teks" className="w-[100%] outline-none border-b border-txtSecond mx-auto .px-1 focus:border-b-2 peer text-md bg-none tracking-wide" value={name} onChange={(e)=>setName(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:left-3 peer-focus:-top-1 ease-in-out duration-500 peer-focus:text-sm ${name ? "-top-1 text-sm" : "top-3"}`}>Name</span>
         </div>
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-2">
          <input type="email" className="w-[100%] outline-none border-b border-txtSecond mx-auto .px-1 focus:border-b-2 peer text-md bg-none tracking-wide" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:left-3 peer-focus:-top-1 ease-in-out duration-500 peer-focus:text-sm ${email ? "-top-1 text-sm" : "top-3"}`}>Email</span>
         </div>
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-2">
          <input type="password" className="w-[100%] outline-none border-b border-txtSecond mx-auto .px-1 focus:border-b-2 peer text-md bg-none tracking-wide" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:left-3 peer-focus:-top-1 ease-in-out duration-500 peer-focus:text-sm ${password ? "-top-1 text-sm" : "top-3"}`}>Password</span>
         </div>
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-2">
          <input type="password" className="w-[100%] outline-none border-b border-txtSecond mx-auto px-1 peer focus:border-b-2 text-md bg-none tracking-wide" value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:-top-1 peer-focus:left-3 ease-in-out duration-500 peer-focus:text-sm ${confPassword ? "-top-1 text-sm" : "top-3"}`}>Confirm</span>
         </div>
         <div className="w-[90%] py-3 mb-5">
           <select onChange={(e)=>setRole(e.target.value)} value={role} className="w-[100%] h-7 bg-bgSecond text-txtSecond border-b border-txtSecond outline-none">
             <option value="admin">admin</option>
             <option value="user">user</option>
           </select>
         </div>
         <button className="py-1 px-16 rounded-full bg-bgHover text-txtSecond tracking-wide font-semibold">Save</button>
        </form>
      </div>
    </div>
    )
}