import UserCardMenu from "./UserCardMenu";

export default function UserFeatures({title = "Features"}){
  return(
    <section>
      <div>
        <h1 className="text-2xl font-bold text-center my-5">
          {title}
        </h1>
      </div>

      <div className="carousel carousel-center rounded-box pt-0 p-5 flex flex-row items-center gap-4">
        <div className="carousel-item">
          <UserCardMenu/>
        </div>
        <div className="carousel-item">
          <UserCardMenu/>
        </div>
        <div className="carousel-item">
          <UserCardMenu/>
        </div>
        <div className="carousel-item">
          <UserCardMenu/>
        </div>
        <div className="carousel-item">
          <UserCardMenu/>
        </div>
        <div className="carousel-item">
          <UserCardMenu/>
        </div>
      </div>
    </section>
  )
}