import {useState,useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function TableProduct(){
  const [product,setProduct]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    getProduct()
  },[])
  
  const getProduct=async()=>{
    try{
      const response=await axios.get("http://localhost:3000/products")
      setProduct(response.data)
    }catch(err){
      if(err.response.status === 401){
        navigate("/")
      }
    }
  }
  
  const handleDelete=async(id)=>{
    try{
      const response=await axios.delete(`http://localhost:3000/product/${id}`)
      getProduct()
    }catch(err){
      console.log(err)
    }
  }
  
  const handleUpdate=async(id)=>{
    navigate(`/product/edit/${id}`)
  }
  return (
 <div className="px-3">
   <div className="w-secreen h-full p-4 text-txtPrimary">
     <h1>Product</h1>
   </div>
   <div className="w-full overflow-x-scroll">
    <table className="w-full table-fixed">
      <thead className="bg-slate-400 border-b border-gray-200 text-md">
        <tr>
          <th className="p-3 w-10 text-txtPrimary text-left tracking-wide">No</th>
          <th className="p-3 w-32 text-txtPrimary text-left tracking-wide">Product</th>
          <th className="p-3 w-32 tracking-wide text-txtPrimary text-left">Price</th>
          <th className="p-3 w-32 tracking-wide text-txtPrimary text-left">By</th>
          <th className="p-3 w-40 tracking-wide text-txtPrimary text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="font-semibold text-sm">
      {
        product?.map((m,i)=>{
          return (
        <tr key={i+1} className="bg-slate-200">
          <td className="p-3 w-10 text-txtPrimary">{i+1}</td>
          <td className="p-3 w-32 text-txtPrimary">{m.name}</td>
          <td className="p-3 w-32 text-txtPrimary">{m.price}</td>
          <td className="p-3 w-32 text-txtPrimary">{m.user.name}</td>
          <td className="p-3 w-40 text-txtPrimary">
            <button className="py-1 px-2 rounded text-bgSecond bg-red-500 mr-2" onClick={()=>handleDelete(m.uuid)}>hapus</button>
            <button className="py-1 px-2 rounded text-bgSecond bg-blue-400" onClick={()=>handleUpdate(m.uuid)}>edit</button>
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