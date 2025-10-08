import {RiShoppingCartLine, RiStarFill, RiQuillPenFill} from '@remixicon/react'

export default function CardMenu({title, image, price, isBest = false, isSignature = false}){
  return(
    <div className="mt-2 ease-out duration-300 hover:scale-105 w-32 min-h-58">
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
          <h2 className="h-12 card-title text-base font-semibold line-clamp-2 text-ellipsis">
            {title}
          </h2>
          <div className="card-actions items-end justify-end h-full">
            {isSignature &&(
              <div className="badge badge-costum badge-outline badge-secondary">
                <RiQuillPenFill className="w-3 h-3"/>
              </div>
            )}
            {isBest &&(
              <div className="badge badge-costum badge-outline badge-primary">
                <RiStarFill className="w-3 h-3"/>
              </div>
            )}
            <div className="badge badge-outline">Rp {Number(price).toLocaleString("id-ID")}</div>
          </div>
        </div>
      </div>
    </div>
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