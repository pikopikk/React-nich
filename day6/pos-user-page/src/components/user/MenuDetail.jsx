import { Link, useParams } from "react-router-dom";
import {RiShoppingCartLine, RiArrowLeftLine, RiQuestionFill, RiArrowRightCircleFill, RiBowlFill, RiDrinks2Fill} from '@remixicon/react'
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
    <section className="w-full min-h-[900px] bg-[#F1F0E4] mt-[64px]">
      <div className="hero min-h-[280px] relative">
        <img className="h-full w-full" src={image} alt={image} />
        <MenuDetailBackButton/>
      </div>

      <div className="flex flex-col items-start">
        {/* title */}
        <div className="flex flex-col gap-1 bg-gradient-to-r from-[#F1F0E4] to-white border-b border-gray-300/50 w-full py-4 px-5 text-stone-900">
          <h1 className="text-3xl font-bold">
            Rp {Number(price).toLocaleString("id-ID")}
          </h1>
          <h2 className="text-lg ">
            {title}
          </h2>
          <p>
            Tersedia 
            <span>

            </span>
          </p>
        </div>

        {/* kategori */}
        <div className="flex flex-col px-5 py-4 items-start w-full gap-1 bg-gradient-to-l from-[#F1F0E4] to-white">
          <h4 className="text-base text-stone-900">
            kategori menu:
          </h4>
          <div className="flex flex-row gap-2">
            {/* cek, apakah termasuk 'best' dan atau 'signature'*/}
            {category === "makanan" && (
              <div className="badge badge-outline badge-info flex items-center gap-1 text-[#517465]">
                <RiBowlFill className="w-5 h-5" />
              </div>
            )}
            {category === "minuman" && (
              <div className="badge badge-outline badge-accent flex items-center gap-1">
                <RiDrinks2Fill className="w-5 h-5" />
              </div>
            )}
            {isBest && <div className="badge badge-outline badge-primary text-[#747934]">Best</div>}
            {isSignature && <div className="badge badge-outline badge-secondary text-[#c99b5f]">Signature</div>}
          </div>
        </div>

        {/* deskripsi */}
        <div className="bg-[#F1F0E4] text-stone-900 py-4 px-5">
          <div className="bg-white rounded-2xl py-4 px-5 shadow-md">
            <h4 className="text-base font-semibold">
              deskripsi menu:
            </h4>
            <p className="text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>

      <MenuDetailButton/>
    </section>
  )
}

function MenuDetailBackButton(){
  return(
    <Link 
      to="/"
      className="absolute top-5 left-5 text-3xl bg-[#BCA88D]/80 p-1 rounded-4xl text-white cursor-pointer">
      <RiArrowLeftLine className="w-7 h-7"/>
    </Link>
  )
}

function MenuDetailButton(){
  return(
    <div className="flex flex-row items-center justify-between gap-0 fixed bottom-0 left-0 w-full p-5 bg-stone-900 border-t border-base-300">
      <Link className="flex flex-col items-center w-[35%] gap-1">
        <RiQuestionFill className="text-white"/>
        <p className="text-white">
          Cara Pesan
        </p>
      </Link>
      <button className="flex justify-center items-center w-[30%]">
        <RiShoppingCartLine className="text-white"/>
      </button>
      <button className="flex flex-col items-center justify-center w-[35%] gap-1 text-white">
        <RiArrowRightCircleFill className="text-white"/>
        Pesan Sekarang
      </button>
    </div>
  )
}