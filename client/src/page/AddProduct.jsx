import {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
export default function AddProduct(){
const [name,setName]=useState(null)
const [price,setPrice]=useState(null)

const navigate=useNavigate()

const handleAddProdut=async(e)=>{
  e.preventDefault()
  try{
   const response= await axios.post("http://localhost:3000/product",{
      name:name,
      price:price
    })
    navigate("/product")
    console.log(response)
  }catch(err){
    console.log(err)
  }
}
  return (
    <div className="w-[100%] min-h-screen flex items-center justify-center flex-col text-txtPrimary">
      <div className="bg-bgSecond w-[80%] h-full flex flex-col items-center rounded border-gray-200 border p-5">
        <div className="font-bold text-3xl mb-5">
          <h1>Add Product</h1>
        </div>
        <form onSubmit={handleAddProdut} className="w-[100%] h-full flex flex-col items-center">
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-2">
          <input type="teks" className="w-[100%] outline-none border-b border-txtSecond mx-auto .px-1 focus:border-b-2 peer text-md bg-none tracking-wide" value={name} onChange={(e)=>setName(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:left-3 peer-focus:-top-1 ease-in-out duration-500 peer-focus:text-sm ${name ? "-top-1 text-sm" : "top-3"}`}>Name</span>
         </div>
         <div className="flex flex-col items-center relative py-3 w-[90%] mb-5">
          <input type="number" className="w-[100%] outline-none border-b border-txtSecond mx-auto px-1 peer focus:border-b-2 text-md bg-none tracking-wide" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          <span className={`text-txtSecond absolute left-3 peer-focus:-top-1 peer-focus:left-3 ease-in-out duration-500 peer-focus:text-sm ${price ? "-top-1 text-sm" : "top-3"}`}>Price</span>
         </div>
         <button type="submit" className="py-1 px-16 rounded-full bg-bgHover text-txtSecond tracking-wide font-semibold">Add</button>
        </form>
      </div>
    </div>
    )
}