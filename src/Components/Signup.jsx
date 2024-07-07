
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
const Signup = () => {
  const [errors, setErrors] = useState();
const navigate=useNavigate();
  const [signupData, setSignupData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const handleSignup=()=>{

    let errors=[]
    if(!signupData.name){
      errors.push({name: "name" , massage:"Name is required"})
    }
    if(!signupData.email){
      errors.push({email: "email" , massage:"Email is required"})
    }
    if(!signupData.password){
      errors.push({password: "password" , massage:"Password is required"})
    }
    setErrors(errors)
    if(errors.length===0){
      navigate("/")
    }
  }


  return (
    <div className=" bg-gray-100 flex align-middle justify-center h-screen ">
   <div id="my_modal_1" className="h-auto  w-1/2"  >
            <div className="modal-box bg-gray-100 flex flex-col gap-4 border ">
              <h3 className="font-bold text-lg text-pink-500">Signup!</h3>
              <div>
                <h1 className=" text-black ml-2 "> Name :</h1>
                <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
                  <input
                    type="text"
                    className="grow outline-none   bg-gray-100  text-black   "
                    placeholder="Enter your full name "
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                  />
                </label>
                <p className="text-red-600 ">
                  {errors?.find((err) => err.name === "name")?.massage}
                </p>
              </div>
              <div>
                <h1 className=" text-black ml-2 "> Email :</h1>
                <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
                  <input
                    type="Email"
                    className="grow outline-none   bg-gray-100  text-black   "
                    placeholder="Email"
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                  />
                </label>
                <p className="text-red-600 ">
                  {errors?.find((err) => err.email === "email")?.massage}
                </p>
              </div>
              <div>
                <h1 className=" text-black ml-2 "> Password :</h1>
                <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
                  <input
                    type="Password"
                    className="grow outline-none bg-gray-100 text-black   "
                    placeholder="Password"
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                  />
                </label>
                <p className="text-red-600 ">
                  {errors?.find((err) => err.password === "password")?.massage}
                </p>
              </div>
              <div className="flex justify-around">
                {/* <span className="text-black">Not Registor ?</span> */}
                <Link  className=" bg-pink-600 rounded h-12 w-24 px-5 py-3 mt-4 cursor-pointer text-white" onClick={()=>handleSignup()}>
                  Signup
                </Link>

                <div className="mt-8">
                   <span className="text-black">Have Account?</span>
                <button  onClick={() => document.getElementById("my_modal_1").showModal()} className="text-blue-700">
                  Login
                </button>
                </div>
                
              </div>

              <div className="flex flex-row  gap-2 justify-around">
               
                
                <div className="modal-action ">
                <form method="dialog ">
                  <div >
                    <Link to="/" className="btn text-white">Close</Link>
                  </div>
                </form>
              </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Signup
