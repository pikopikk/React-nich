import { Link, useParams } from "react-router-dom";
import {RiShoppingCartLine, RiArrowLeftLine, RiQuestionFill, RiArrowRightCircleFill, RiBowlFill, RiDrinks2Fill, RiCloseCircleFill, RiCheckboxCircleFill, RiShieldCheckFill} from '@remixicon/react'
import { menus } from "../../data/menu";
import { useNavigate } from "react-router-dom";

export default function MenuDetail(){
  const {id} = useParams()
  const menu = menus.find((item) => item.id === Number(id))

  if(!menu){
    return(
      <h1>asda</h1>
    )
  }

  const {title, image, price, category, isBest, isSignature, description, tersedia} = menu

  return(
    <section className="w-full min-h-dvh pb-20 bg-[#F1F0E4] mt-[64px]">
      <div className="hero min-h-[280px] relative">
        <img className="h-full w-full" src={image} alt={image} />
        <MenuDetailBackButton/>
      </div>

      <div className="flex flex-col items-start">
        {/* title */}
        <div className="flex flex-col gap-1 bg-gradient-to-t from-[#F1F0E4] to-white border-b border-gray-300/50 w-full py-4 px-5 text-stone-900">
          <h1 className="text-3xl font-bold">
            Rp {Number(price).toLocaleString("id-ID")}
          </h1>
          <h2 className="text-lg ">
            {title}
          </h2>
        </div>

        {/* kategori */}
        <div className="flex flex-col px-5 py-4 items-start w-full gap-1 bg-gradient-to-l from-[#F1F0E4] to-white">
          <div className="flex flex-row items-center gap-2 text-base text-stone-900">
            <p>
              Tersedia 
            </p>
            {(tersedia === true) ? <span><RiCheckboxCircleFill className="w-5 h-5 text-success"/></span> : <span><RiCloseCircleFill className=" w-5 h-5 text-error"/></span>}
          </div>

          <JaminanMenu/>

          <h4 className="text-base text-stone-900">
            Kategori Menu:
          </h4>
          <div className="flex flex-row gap-2">
            {/* cek, apakah termasuk 'best' dan atau 'signature'*/}
            {category === "makanan" && (
              <div className="badge badge-outline badge-info flex items-center gap-1 text-[#517465]">
                <RiBowlFill className="w-5 h-5" />
              </div>
            )}
            {category === "minuman" && (
              <div className="badge badge-outline badge-accent flex items-center gap-1 text-[#517465]">
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

      <MenuDetailButton menu={menu}/>
    </section>
  )
}

function MenuDetailBackButton(){
  const navigate = useNavigate()
  const handleCancel = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return(
    <button 
      onClick={handleCancel}
      className="absolute top-5 left-5 text-3xl bg-stone-900/60 p-1 rounded-4xl text-white cursor-pointer btn-press">
      <RiArrowLeftLine className="w-7 h-7"/>
    </button>
  )
}

function MenuDetailButton({menu}){
  return(
    <div className="flex flex-row h-20 items-center justify-between gap-0 fixed bottom-0 left-0 w-full p-5 bg-stone-900 border-t border-base-300">
      <Link 
        to={'/CaraPesan'}
        className="flex flex-col items-center w-[35%] gap-1">
        <RiQuestionFill className="text-white btn-press"/>
        <p className="text-white">
          Cara Pesan
        </p>
      </Link>
      <button 
        disabled={!menu.tersedia}
        className="flex justify-center items-center w-[30%]">
        <RiShoppingCartLine className="text-white btn-press"/>
      </button>
      <button 
        disabled={!menu.tersedia}
        className="flex flex-col items-center justify-center w-[35%] gap-1 text-white">
        <RiArrowRightCircleFill className="text-white btn-press"/>
        Pesan Sekarang
      </button>
    </div>
  )
}

function JaminanMenu(){
  const jaminanMenu = [
    {
      icon: <RiCheckboxCircleFill className="w-5 h-5 text-success"/>,
      description: 'Dimasak langsung saat dipesan.',
    },
    {
      icon: <RiCheckboxCircleFill className="w-5 h-5 text-success"/>,
      description: 'Bahan segar setiap hari.',
    },
    {
      icon: <RiCheckboxCircleFill className="w-5 h-5 text-success"/>,
      description: '100% Halal',
    },
  ]

  return(
    <>
      {/* The button to open modal */}
      <div className="flex flex-row items-center gap-2 text-base text-stone-900">
        <p>
          Jaminan Kualitas
        </p>
        <label htmlFor="my_modal_7" >
          <RiShieldCheckFill className="w-5 h-5 btn-press"/>
        </label>
      </div>
      {/* modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white shadow-md text-sm text-stone-900">
          <h3 className="text-base font-bold">
            Jaminan Menu Kami
          </h3>
          <div className="pb-4 pt-2 flex flex-col items-start">
            {jaminanMenu.map((jaminan, index) => (
              <div 
                key={index}
                className="flex flex-row gap-2 items-center py-2 border-b border-stone-900/50 w-full ">
                {jaminan.icon}
                <p>
                  {jaminan.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  )
}