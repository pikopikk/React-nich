import UserFeatures from "./UserFeatures";

export default function UserCatalog(){
  return(
    <section>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 duration-500 rounded-none border-b-0 borderl-none border-r-none">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold duration-500">
          Jangan lupa makan yaa.
        </div>
        <div className="collapse-content text-sm duration-500">
          <UserFeatures title="Makanan"/>
        </div>
      </div>
      
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 duration-500 rounded-none borderl-none border-r-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold duration-500">
          Minumnya jangan lupa.
        </div>
        <div className="collapse-content text-sm duration-500">
          <UserFeatures title="Minuman"/>
        </div>
      </div>

    </section>

    
  )
}