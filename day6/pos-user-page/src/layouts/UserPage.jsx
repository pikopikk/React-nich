import UserFooter from "../components/user/navbar-footer/UserFooter";
import UserNavbar from "../components/user/navbar-footer/UserNavbar";

export default function UserPage({children}){
  return(
    <>
      <UserNavbar/>

      <div>
        {children}
      </div>

      <UserFooter/>
    </>
  )
}