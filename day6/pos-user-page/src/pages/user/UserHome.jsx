import UserHero from "../../components/user/hero-section/UserHero";
import UserFeatures from "../../components/user/UserFeatures";
import UserPage from "../../layouts/UserPage";
import UserCatalog from "../../components/user/UserCatalog";

export default function UserHome(){
  return(
    <UserPage>
      <UserHero/>
      <UserFeatures/>
      <UserCatalog/>
    </UserPage>
  )
}