import { Link } from "react-router-dom";
import {RiShoppingCartLine} from '@remixicon/react'

export default function UserCardMenu(){
  return(
    <Link 
      className="mt-2 ease-out duration-300 hover:scale-105" 
      to="/menu">
      <div className="card bg-base-100 w-32 shadow-sm">
        <figure className="relative">
          <UserIconCart/>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body p-3 w-32">
          <h2 className="card-title text-base truncate line-clamp-1">
            Takoyaki Spesial
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary text-xs">
              Best
            </div>
            <div className="badge badge-outline">Rp 15.000</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function UserIconCart(){
  return(
    <button 
      className="bg-[#00000049] p-1 rounded-2xl absolute top-2 right-2 w-fit h-fit ease-in duration-200 hover:scale-110">
      <RiShoppingCartLine className="text-white w-5 h-5"/>
    </button>
  )
}