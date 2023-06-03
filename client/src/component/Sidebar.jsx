import {CgClose} from "react-icons/cg"
import {HiHome,HiUser} from "react-icons/hi"
import {FaShoppingCart} from "react-icons/fa"
import {LuLogOut} from "react-icons/lu"
import {useNavigate} from "react-router-dom"
import fire from "../aset/fire.png"
import CardNavigate from "./CardNavigate"
import {useState,useEffect} from "react"
export default function Sidebar({toggle,eventClose,handleToggle}){
  const [active,setActive]=useState(0)
  const [menu,setMenu]=useState([
    {
      title:"Dashboard",
      icon:HiHome
    },
    {
      title:"User",
      icon:HiUser
    },
    {
      title:"Product",
      icon:FaShoppingCart
    },
    {
      title:"Logout",
      icon:LuLogOut
    }
  ])
  const nvgt=useNavigate()
  
   const handleNavigate=(title)=>{
     const Title=title.toLowerCase()
     if(Title === "logout"){
       nvgt("/")
     }else{
     nvgt(`/${Title}`)
     }
     handleToggle()
   }
  return (
    <div className={`fixed transition-all ease-in-out z-50 duration-500 top-0 h-screen w-[80%] bg-bgSecond flex flex-col items-center justify-start ${toggle ? "left-0" : "-left-[300px]"}`}>
 
    <div className="relative w-[100%] h-[40%] flex justify-center items-center">
       <span onClick={eventClose} className="absolute right-3 top-3 text-txtPrimary text-3xl">
         <CgClose/>
       </span>
       <img src={fire} alt="img" className="h-[60%]"/>
    </div>
    <div className="w-[100%] h-[60%] flex flex-col items-center">
    {
      menu?.map((m,i)=>{
        return <CardNavigate key={i} icon={<m.icon/>} title={m.title} index={i} active={active} event={()=>setActive(i)} navigate={()=>handleNavigate(m.title)}/>
      })
    }
    </div>
   </div>
    )
}