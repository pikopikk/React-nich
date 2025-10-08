import CardMenu from "./CardMenu";
import { Link } from "react-router-dom";
import { menus } from "../../data/menu";

export default function Features({title = "Features"}){
  // filter signature n best, signature.
  const signatureMenus = menus
    .filter((menu) => menu.isSignature)
    .sort((a, b) => {
      // Urutan prioritas: best+signature > signature saja
      const getPriority = (item) => (item.isBest && item.isSignature ? 2 : 1);
      return getPriority(b) - getPriority(a);
    });

  return(
    <section>
      <div>
        <h1 className="text-2xl font-bold text-center my-5">
          {title}
        </h1>
      </div>

      <div className="carousel carousel-center rounded-box pt-0 p-5 flex flex-row items-center gap-4">
        {signatureMenus.map((menu) => (
          <div className="carousel-item" key={menu.id}>
            <Link to={`/InformasiMenu/${menu.id}`}>
              <CardMenu {...menu}/>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}