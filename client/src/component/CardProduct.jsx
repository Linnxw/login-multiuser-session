import {useState} from "react"
export default function CardProduct(){
  const [toggle,setToggle]=useState(false)
  return (
    <div className="mx-auto w-[85%] h-full rounded flex flex-col justify-between items-center px-3 transition-colors bg-bgSecond text-txtPrimary">
      <div className="w-[100%]">
       <h1 onClick={()=>setToggle(toggle=>!toggle)} className="text-[1.3rem]">Product saya</h1>
      </div>
      <div className={`${toggle ? "bg-red-400 py-3 h-20":"h-0"} overflow-hidden w-[100%] transition-all ease-in-out duration-300`}>
       tessssssjdkjk jsjsijdnw kdnjwnkkfoocj kcouwicnjdjdj kwouehnckskk
      </div>
    </div>
    )
}