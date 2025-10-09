import Hero from "../../components/user/hero-section/Hero";
import Features from "../../components/user/Features";
import UserPage from "../../layouts/UserPage";
import Catalog from "../../components/user/Catalog";
import ServiceInfo from "../../components/user/serivce-info/ServiceInfo";
import BuyTutorial from "../../components/user/buy-tutor/BuyTutorial";

export default function UserHome(){
  return(
    <UserPage>
      <Hero/>
      <div>
        <ServiceInfo/>
        <Features/>
        <BuyTutorial/>
        <Catalog/>
      </div>
    </UserPage>
  )
}