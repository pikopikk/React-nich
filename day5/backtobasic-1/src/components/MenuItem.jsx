import MenuList from "./MenuList";
import data from "../services/data"; {/* fetch/import data */}

function MenuItem(){
  return(
    <div className="flex flex-wrap-reverse flex-row gap-3">
      {/* looping data */}
      {data.map((listData)=> <MenuList key={listData.Id} {...listData}/>)} 
    </div>
  )
}

export default MenuItem
