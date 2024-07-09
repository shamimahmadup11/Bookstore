import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider"


const Logout = () => {

    const [authUser , setAuthUser]=useAuth();
    const hanldeLogout=()=>{
      try{
        setAuthUser({
            ...authUser , 
            user:null
        })
        localStorage.removeItem("user");
        toast.success("Logout Successfully !")
        window.location.reload();
      }catch(error){
        console.log(error.message)
        toast.success("Error" , error.message)
      }

    }

  return (
    <div>
        <button className=" bg-red-500 h-10 w-16 rounded text-white " onClick={()=>hanldeLogout()}>Logout</button>
      
    </div>
  )
}

export default Logout
