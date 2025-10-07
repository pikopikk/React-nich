import Footer from "../components/user/navbar-footer/Footer";
import Navbar from "../components/user/navbar-footer/Navbar";

export default function UserPage({children}){
  return(
    <div>
      <Navbar/>

      <div>
        {children}
      </div>

      <Footer/>
    </div>
  )
}