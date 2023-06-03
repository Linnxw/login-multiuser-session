import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function Login(){
const [email,setEmail]=useState(null)
const [password,setPassword]=useState(null)
const [err,setErr]=useState(null)
const navigate=useNavigate()
const handleLogin=async(e)=>{
  e.preventDefault()
  try{
  const response= await axios.post("http://localhost:3000/login",{
    email:email,
    password:password
    })
  navigate("/dashboard")
  }catch(err){
    console.log(err)
    if(err.response){
      setErr(err.response.data.msg)
    }
  }
}
  return (
    <div className="w-[100%] min-h-screen flex items-center justify-center flex-col text-txtPrimary">
      <div className="bg-bgSecond w-[80%] h-full flex flex-col items-center rounded border-gray-200 border p-5">
        <div className="font-bold text-3xl mb-5 flex flex-col items-center">
          <h1>Login</h1>
          <p className="text-red-500 text-sm font-light tracking-wide">{err}</p>
        </div>
        <form onSubmit={handleLogin} className="w-[100%] h-full flex flex-col items-center">
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-2">
          <input type="email" className="w-[100%] outline-none border-b border-txtSecond mx-auto .px-1 focus:border-b-2 peer text-md bg-none tracking-wide" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:left-3 peer-focus:-top-1 ease-in-out duration-500 peer-focus:text-sm ${email ? "-top-1 text-sm" : "top-3"}`}>Email</span>
         </div>
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-5">
          <input type="password" className="w-[100%] outline-none border-b border-txtSecond mx-auto px-1 peer focus:border-b-2 text-md bg-none tracking-wide" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:-top-1 peer-focus:left-3 ease-in-out duration-500 peer-focus:text-sm ${password ? "-top-1 text-sm" : "top-3"}`}>Password</span>
         </div>
         <button className="py-1 px-16 rounded-full bg-bgHover text-txtSecond tracking-wide font-semibold">Login</button>
        </form>
      </div>
    </div>
    )
}