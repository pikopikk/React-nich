import { Link } from "react-router-dom";
import {RiShoppingCartLine} from '@remixicon/react'

export default function CardMenu({title, image, price, isBest = false}){
  return(
    <Link 
      className="mt-2 ease-out duration-300 hover:scale-105 w-32 min-h-52" 
      to='/InformasiMenu'>
      <div className="card bg-base-100 w-full h-full shadow-sm">
        <figure className="relative">
          <UserIconCart/>
          <img
            src={image}
            alt={title} 
            className="object-cover w-full h-24 rounded-t-lg"
          />
        </figure>
        <div className="card-body p-3 w-32">
          <h2 className="h-full card-title text-base truncate line-clamp-1">
            {title}
          </h2>
          <div className="card-actions items-end justify-end h-full">
            {isBest &&(
              <div className="badge badge-secondary text-xs">
                Best
              </div>
            )}
            <div className="badge badge-outline">{price}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function UserIconCart(){
  return(
    <button 
      className="bg-[#0000006b] p-1 rounded-2xl absolute top-2 right-2 w-fit h-fit ease-in duration-200 hover:scale-110">
      <RiShoppingCartLine className="text-white w-5 h-5"/>
    </button>
  )
}