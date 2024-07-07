import Body from "./Components/Body"
import Course from "./Components/Course";
import Footer from "./Components/Footer"
import FreeBook from "./Components/FreeBook"
import Navbar from "./Components/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <>  <Navbar/>
      <Body/>
      <FreeBook/>
      <Footer/>
      </>
    },
    {
      path:'/course',
      element: <> 
       <Navbar/>
      <Course/>
      <Footer/>
      </>
    },
    {
      path:'/signup',
      element: <> 
       <Navbar/>
      <Signup/>
      <Footer/>
      </>
    },
    {
      path:'/contact',
      element: <> 
       <Navbar/>
      <Contact/>
      <Footer/>
      </>
    },
  ]
  )
 
  return (
    <>
  <RouterProvider router={router}/>
 
    </>
  )
}

export default App
