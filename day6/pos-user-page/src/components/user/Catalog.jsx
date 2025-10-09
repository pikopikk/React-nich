import CardMenu from "./CardMenu";
import { menus } from "../../data/menu";
import { Link } from "react-router-dom";
import {RiBowlFill, RiDrinks2Fill} from '@remixicon/react'

export default function Catalog(){
  // filter untuk makanan
  const foodMenus = menus
    .filter((menu) => menu.category === "makanan")
    .sort((a, b) => {
      const getPriority = (item) => {
        if (item.isBest && item.isSignature) return 3
        if (item.isSignature) return 2
        if (item.isBest) return 1
        return 0
      }
      return getPriority(b) - getPriority(a)
    })

  // filter untuk minuman
  const drinkMenus = menus
    .filter((menu) => menu.category === "minuman")
    .sort((a, b) => {
      const getPriority = (item) => {
        if (item.isBest && item.isSignature) return 3
        if (item.isSignature) return 2
        if (item.isBest) return 1
        return 0
      }
      return getPriority(b) - getPriority(a)
    })

  return(
    <section>
      <div className="collapse collapse-arrow bg-[#F1F0E4] duration-500 rounded-none border-b-0 borderl-none border-r-none">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="flex flex-row gap-2 collapse-title text-xl font-bold text-stone-900 duration-500 bg-gradient-to-t from-[#F1F0E4] to-white">
          Makanan <RiBowlFill/>
        </div>
        <div className="collapse-content text-sm duration-500">
          <div className="carousel carousel-center rounded-box p-0 flex flex-row items-center gap-4">
            {foodMenus.map((menu) => (
              <div className="carousel-item" key={menu.id}>
                <Link to={`/InformasiMenu/${menu.id}`}>
                  <CardMenu {...menu}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="collapse collapse-arrow bg-[#F1F0E4] border-0 duration-500 rounded-none borderl-none border-r-none">
        <input type="checkbox" name="my-accordion-2" />
        <div className="flex flex-row gap-2 collapse-title text-xl font-bold text-stone-900 duration-500 bg-gradient-to-t from-[#F1F0E4] to-white">
          Minuman <RiDrinks2Fill/>
        </div>
        <div className="collapse-content text-sm duration-500">
          <div className="carousel carousel-center rounded-box pt-0 flex flex-row items-center gap-4">
            {drinkMenus.map((menu) => (
              <div className="carousel-item" key={menu.id}>
                <Link to={`/InformasiMenu/${menu.id}`}>
                  <CardMenu {...menu}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>

    
  )
}