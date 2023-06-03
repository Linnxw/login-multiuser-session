import TableUser from "../component/TableUser.jsx"
import {useNavigate} from "react-router-dom"
export default function User(){
  const navigate=useNavigate()
  return (
 <div className="w-screen min-h-screen bg-bgPrimary">
    <button className="py-2 px-4 bg-green-400 rounded mt-3 ml-3 font-bold tracking-wide text-bgPrimary hover:bg-green-500" onClick={()=>navigate("/user/add")}>Add User</button>
      <TableUser/>
    </div>
    )
}