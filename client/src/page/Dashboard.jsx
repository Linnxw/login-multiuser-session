import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"
export default function Dashboard(){
  const [me,setMe]=useState({})
  const navigate=useNavigate()
  
  useEffect(()=>{
   getMe()
  },[])
  
 const getMe=async()=>{
    try{
     const me = await axios.get("http://localhost:3000/me")
     setMe(me.data)
     console.log(me)
    }catch(err){
      if(err.response){
        navigate("/")
      }
    }
  }
  return (
<div className="w-screen min-h-screen bg-bgPrimary">
      <h1 className="text-txtPrimary font-bold text-2xl py-10 px-5">Dashboard,Welcome back {me?.name}</h1>
    </div>
    )
}