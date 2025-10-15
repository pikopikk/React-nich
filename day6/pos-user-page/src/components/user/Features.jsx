import CardMenu from "./CardMenu";
import { menus } from "../../data/menu";

export default function Features({title = "Rekomendasi Kami"}){
  // filter signature n best, signature.
  const getPriority = (item) => {
    if (!item.tersedia) return -1; // taruh terakhir
    if (item.isBest && item.isSignature) return 2;
    return 1;
  };

  const signatureMenus = menus
    .filter((menu) => menu.isSignature)
    .sort((a, b) => getPriority(b) - getPriority(a));

  return(
    <section id="features" className="bg-[#F1F0E4] py-4 flex flex-col gap-2">
      <div>
        <h1 className="text-2xl font-bold text-center text-stone-900">
          {title}
        </h1>
      </div>
      
      <div className="px-[16px]">
        <div className="carousel carousel-center rounded-box pt-0 flex flex-row items-center gap-4">
          {signatureMenus.map((menu) => (
            <div className="carousel-item" key={menu.id}>
              <CardMenu {...menu}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}