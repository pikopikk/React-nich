import CardMenu from "./CardMenu";
import { menus } from "../../data/menu";

export default function Features({title = "Features"}){
  const bestMenus = menus.filter((menu) => menu.isBest);

  return(
    <section>
      <div>
        <h1 className="text-2xl font-bold text-center my-5">
          {title}
        </h1>
      </div>

      <div className="carousel carousel-center rounded-box pt-0 p-5 flex flex-row items-center gap-4">
        {bestMenus.map((menu) => (
          <div className="carousel-item" key={menu.id}>
            <CardMenu {...menu}/>
          </div>
        ))}
      </div>
    </section>
  )
}