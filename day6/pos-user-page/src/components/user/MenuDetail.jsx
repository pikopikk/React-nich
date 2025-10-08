import { Link, useParams } from "react-router-dom";
import {RiShoppingCartLine, RiArrowLeftCircleFill, RiQuestionFill, RiArrowRightCircleFill, RiBowlFill, RiDrinks2Fill} from '@remixicon/react'
import { menus } from "../../data/menu";

export default function MenuDetail(){
  const {id} = useParams()
  const menu = menus.find((item) => item.id === Number(id))

  if(!menu){
    return(
      <h1>asda</h1>
    )
  }

  const {title, image, price, category, isBest, isSignature, description} = menu

  return(
    <section className="w-full">
      <div className="hero min-h-[280px] relative">
        <img className="h-full w-full" src={image} alt={image} />
        <MenuDetailBackButton/>
      </div>

      <div className="flex flex-col items-start gap-2 p-5 space-y-3">
        <div className="flex flex-col gap-1 border-b border-gray-300/50 w-full pb-3">
          <h1 className="text-3xl font-bold">
            Rp {Number(price).toLocaleString("id-ID")}
          </h1>
          <h2 className="text-lg ">
            {title}
          </h2>
        </div>
        <div>
          <div>
            <div className="flex flex-col items-start w-full mb-2 gap-1">
              <h4 className="text-base">
                kategori menu:
              </h4>
              <div className="flex flex-row gap-2">
                {/* cek, apakah termasuk 'best' dan atau 'signature'*/}
                {category === "makanan" && (
                  <div className="badge badge-outline badge-info flex items-center gap-1">
                    <RiBowlFill className="w-5 h-5" />
                  </div>
                )}
                {category === "minuman" && (
                  <div className="badge badge-outline badge-accent flex items-center gap-1">
                    <RiDrinks2Fill className="w-5 h-5" />
                  </div>
                )}
                {isBest && <div className="badge badge-outline badge-primary">Best</div>}
                {isSignature && <div className="badge badge-outline badge-secondary">Signature</div>}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-base font-semibold">
            deskripsi menu:
          </h4>
          <p className="text-sm">
            {description}
          </p>
        </div>
      </div>

      <MenuDetailButton/>
    </section>
  )
}

  // {isBest &&(
  //   <div className="badge badge-costum badge-outline badge-primary">
  //     <RiStarFill className="w-3 h-3"/>
  //   </div>
  // )}

function MenuDetailBackButton(){
  return(
    <Link 
      to="/"
      className="absolute top-5 left-5 text-3xl text-primary hover:text-secondary cursor-pointer">
      <RiArrowLeftCircleFill className="w-9 h-9"/>
    </Link>
  )
}

function MenuDetailButton(){
  return(
    <div className="flex flex-row items-center justify-between gap-0 fixed bottom-0 left-0 w-full p-5 bg-base-100 border-t border-base-300">
      <Link className="flex flex-col items-center w-[35%] gap-1">
        <RiQuestionFill/>
        <p>
          Cara Pesan
        </p>
      </Link>
      <button className="flex justify-center items-center w-[30%]">
        <RiShoppingCartLine/>
      </button>
      <button className="flex flex-col items-center justify-center w-[35%] gap-1">
        <RiArrowRightCircleFill/>
        Pesan Sekarang
      </button>
    </div>
  )
}