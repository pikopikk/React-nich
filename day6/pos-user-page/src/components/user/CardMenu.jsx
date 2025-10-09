import {RiShoppingCartLine, RiStarFill, RiQuillPenFill} from '@remixicon/react'

export default function CardMenu({title, image, price, isBest = false, isSignature = false}){
  return(
    <div className="mt-2 ease-out duration-300 hover:scale-105 w-32 min-h-58">
      <div className="card bg-white w-full h-full shadow-sm">
        <figure className="relative">
          <UserIconCart/>
          <img
            src={image}
            alt={title} 
            className="object-cover w-full h-24 rounded-t-lg"
          />
        </figure>
        <div className="card-body p-3 h-32 w-32 shadow-md">
          <h2 className="h-25 card-title text-base text-stone-900 font-semibold line-clamp-2 text-ellipsis">
            {title}
          </h2>
          <div className="h-full card-actions items-end justify-end">
            {isSignature &&(
              <div className="badge badge-costum badge-outline badge-secondary text-[#747934] border-[#767946]">
                <RiQuillPenFill className="w-3 h-3"/>
              </div>
            )}
            {isBest &&(
              <div className="badge badge-costum badge-outline badge-primary text-[#c99b5f] border-[#cfb28c]">
                <RiStarFill className="w-3 h-3"/>
              </div>
            )}
            <div className="badge badge-outline text-stone-900">Rp {Number(price).toLocaleString("id-ID")}</div>
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