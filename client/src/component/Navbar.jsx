export default function Navbar(props){
  const {eventOpen}=props
  return (
     <div className="sticky top-0 w-screen h-12 flex justify-start items-center px-3 text-txtPrimary bg-white/30 backdrop-blur-sm">
       <div className="w-7 h-[19px] flex flex-col justify-between" onClick={eventOpen}>
         <span className="block w-7 bg-txtPrimary h-[2.5px] rounded"></span>
         <span className="block w-4 bg-txtPrimary h-[2.5px] rounded"></span>
         <span className="block w-7 bg-txtPrimary h-[2.5px] rounded"></span>
       </div>
     </div>
    )
}