import axios from "axios"
const CardNavigate=(props)=>{
  const {icon,title,index,active,event,navigate}=props
  const handleClick=async()=>{
    event()
   if(title === "Logout"){
    try{
     const response=await axios.delete("http://localhost:3000/logout")
      navigate()
    }catch(err){
      console.log(err.response)
    }
   }else{
    navigate()
   }
  }
  
  return (
    <div className={`h-14 mb-2 w-[85%] rounded flex items-center px-6 transition-colors ease-in-out duration-300 ${index === active && "border-l-[3px] border-txtSecond bg-bgHover text-txtSecond"}`} onClick={handleClick}>
       <span className={`text-2xl transition-colors ease-in-out duration-300 mx-1 ${index === active && "text-txtSecond"}`}>{icon}</span>
       <h1 className="text-[1.3rem]">{title}</h1>
    </div>
    )
}
export default CardNavigate