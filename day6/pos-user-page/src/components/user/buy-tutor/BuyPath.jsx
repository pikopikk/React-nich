import { Link } from "react-router-dom";

export default function BuyPath(){
  return(
    <div className="breadcrumbs text-sm">
      <ul>
        <li className="underline"><Link to="/CaraPesan#pilih-menu">Pilih Menu</Link></li>
        <li className="underline"><Link to="/CaraPesan#checkout">Checkout</Link></li>
        <li className="underline"><Link to="/CaraPesan#waiting-list">Waiting List</Link></li>
      </ul>
    </div>
  )
}