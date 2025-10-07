import { Link } from "react-router-dom";
import {RiShoppingCartLine, RiArrowLeftCircleFill, RiQuestionFill} from '@remixicon/react'

export default function MenuDetail(){
  return(
    <div className="relative hero bg-base-200 min-h-screen">
      <Link 
        to="/"
        className="absolute top-5 left-5 text-3xl text-primary hover:text-secondary cursor-pointer">
        <RiArrowLeftCircleFill className="w-9 h-9"/>
      </Link>
      <div className="hero-content h-[80%] bg-amber-200 flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          
          <MenuDetailButton/>
        </div>
      </div>
    </div>
  )
}

function MenuDetailButton(){
  return(
    <div className="flex flex-row items-center justify-between gap-0 fixed bottom-0 left-0 w-full p-5 bg-base-100 border-t border-base-300">
      <Link className="flex flex-col items-center w-[35%]">
        <RiQuestionFill/>
        <p>
          Cara Pesan
        </p>
      </Link>
      <button className="flex justify-center items-center w-[30%]">
        <RiShoppingCartLine/>
      </button>
      <button className="flex items-center justify-center w-[35%]">
        Pesan Sekarang
        <br />
        Rp{/* {harga} */}
      </button>
    </div>
  )
}