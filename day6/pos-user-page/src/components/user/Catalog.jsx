import CardMenu from "./CardMenu";
import { menus } from "../../data/menu";

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
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 duration-500 rounded-none border-b-0 borderl-none border-r-none">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold duration-500">
          Jangan lupa makan yaa.
        </div>
        <div className="collapse-content text-sm duration-500">
          <div className="carousel carousel-center rounded-box pt-0 p-5 flex flex-row items-center gap-4">
            {foodMenus.map((menu) => (
              <div className="carousel-item" key={menu.id}>
                <CardMenu {...menu} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 duration-500 rounded-none borderl-none border-r-none">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold duration-500">
          Minumnya jangan lupa.
        </div>
        <div className="collapse-content text-sm duration-500">
          <div className="carousel carousel-center rounded-box pt-0 p-5 flex flex-row items-center gap-4">
            {drinkMenus.map((menu) => (
              <div className="carousel-item" key={menu.id}>
                <CardMenu {...menu} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>

    
  )
}