import { RiQuestionFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import BuyPath from "./BuyPath";

export default function BuyTutorial(){
  return(
    <section className="px-5 py-4 bg-white">
      <div className="flex flex-row items-center justify-center gap-2">
        <h2 className="text-2xl font-bold text-center text-stone-900">
          Cara Pesan
        </h2>
        <Link to={'/CaraPesan'}>
          <RiQuestionFill className="w-5 h-5 text text-[#7D8D86]"/>
        </Link>
      </div>

      <BuyPath/>   
    </section>
  )
}

