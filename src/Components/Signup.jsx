
import { Link } from "react-router-dom"
const Signup = () => {
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
                  />
                </label>
              </div>
              <div>
                <h1 className=" text-black ml-2 "> Email :</h1>
                <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
                  <input
                    type="Email"
                    className="grow outline-none   bg-gray-100  text-black   "
                    placeholder="Email"
                  />
                </label>
              </div>
              <div>
                <h1 className=" text-black ml-2 "> Password :</h1>
                <label className="px-3 py-1 border rounded-md flex items-center gap-2 bg-gray-100 ">
                  <input
                    type="Password"
                    className="grow outline-none bg-gray-100 text-black   "
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="flex justify-around">
                {/* <span className="text-black">Not Registor ?</span> */}
                <Link to='/' className=" bg-pink-600 rounded h-12 w-24 px-5 py-3 mt-4 cursor-pointer text-white">
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
