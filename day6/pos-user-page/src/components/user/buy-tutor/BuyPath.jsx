import { Link } from "react-router-dom";

export default function BuyPath(){
  const steps = [
    { name: "Pilih Menu", path: "/CaraPesan#pilih-menu" },
    { name: "Checkout", path: "/CaraPesan#checkout" },
    { name: "Bayar", path: "/CaraPesan#bayar" },
    { name: "Waiting List", path: "/CaraPesan#waiting-list" },
  ]

  return(
    <div className="breadcrumbs text-sm text-stone-900">
      <ul className="flex flex-row items-center justify-center">
        {steps.map((step, index) => (
          <li key={index} className="underline">
            <Link 
              to={step.path}
              className="text-stone-900 hover:text-[#BCA88D] transition-colors duration-200">
              {step.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}