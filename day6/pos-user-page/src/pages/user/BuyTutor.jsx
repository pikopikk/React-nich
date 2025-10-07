import BuyPathContent from "../../components/user/buy-tutor/BuyPathContent";
import BuyTutorial from "../../components/user/buy-tutor/BuyTutorial";
import UserPage from "../../layouts/UserPage";

export default function BuyTutor(){
  return(
    <UserPage>
      <div className="mx-5">
        <BuyTutorial/>
        <BuyPathContent/>
      </div>
    </UserPage>
  )
}