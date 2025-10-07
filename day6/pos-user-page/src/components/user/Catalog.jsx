import CardMenu from "./CardMenu";
import { menus } from "../../data/menu";

export default function Catalog(){
  const foodMenus = menus.filter((menu) => menu.category === "makanan");
  const drinkMenus = menus.filter((menu) => menu.category === "minuman");

  return(
    <section>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 duration-500 rounded-none border-b-0 borderl-none border-r-none">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold duration-500">
          Jangan lupa makan yaa.
        </div>
        <div className="collapse-content text-sm duration-500">
          <div className="carousel carousel-center rounded-box pt-0 p-5 flex flex-row items-center gap-4">
            {[...foodMenus]
            .sort((a, b) => (b.isBest === true) - (a.isBest === true))
            .map((menu) => (
              <div className="carousel-item" key={menu.id}>
                <CardMenu {...menu}/>
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
            {[...drinkMenus]
            .sort((a, b) => (b.isBest === true) - (a.isBest === true))
            .map((menu) => (
              <div className="carousel-item" key={menu.id}>
                <CardMenu {...menu}/>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>

    
  )
}