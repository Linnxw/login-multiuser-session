import axios from "axios"
import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
export default function TableUser(){
  const [user,setUser]=useState([])
  const navigate=useNavigate()
  
  useEffect(()=>{
    getUser()
    getMe()
  },[])
  
  const getMe=async()=>{
    try{
     const me = await axios.get("http://localhost:3000/me")
     if(me.data.role === "user")
    return navigate("/dashboard")
    }catch(err){
      console.log(err)
      }
    }
  
  const getUser=async()=>{
    try{
    const response=await axios.get("http://localhost:3000/users")
    setUser(response.data)
    }catch(err){
      if(err.response.status === 401){
        navigate("/")
      }
    }
  }
  
  const handleDeleteUser=async(id)=>{
    try{
      await axios.delete(`http://localhost:3000/users/${id}`)
      getUser()
    }catch(err){
      console.log(err)
    }
  }
  return (
 <div className="px-3">
   <div className="w-secreen h-full p-4 text-txtPrimary">
     <h1>User</h1>
   </div>
   <div className="w-full overflow-x-scroll">
    <table className="w-full table-fixed">
      <thead className="bg-slate-400 border-b border-gray-200 text-md">
        <tr>
          <th className="p-3 w-10 text-txtPrimary text-left tracking-wide">No</th>
          <th className="p-3 w-32 text-txtPrimary text-left tracking-wide">Name</th>
          <th className="p-3 w-32 tracking-wide text-txtPrimary text-left">Email</th>
          <th className="p-3 w-32 tracking-wide text-txtPrimary text-left">Role</th>
          <th className="p-3 w-40 tracking-wide text-txtPrimary text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-sm">
      {
        user?.map((m,i)=>{
          return (
        <tr key={i+1} className="bg-slate-200">
          <td className="p-3 w-10 text-txtPrimary">{i+1}</td>
          <td className="p-3 w-32 text-txtPrimary">{m.name}</td>
          <td className="p-3 w-32 text-txtPrimary">{m.email}</td>
          <td className="p-3 w-32 text-txtPrimary">{m.role}</td>
          <td className="p-3 w-40 text-txtPrimary">
            <button className="py-1 px-2 rounded text-bgPrimary bg-red-500 mr-2" onClick={()=>handleDeleteUser(m.uuid)}>hapus</button>
            <button className="py-1 px-2 rounded text-bgPrimary bg-blue-400" onClick={()=>navigate(`/user/edit/${m.uuid}`)}>edit</button>
          </td>
        </tr>
          )
        })
      }
      </tbody>
    </table>
   </div>
 </div>
    )
}