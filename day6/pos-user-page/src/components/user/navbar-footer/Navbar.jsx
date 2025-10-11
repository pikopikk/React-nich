import { Link } from "react-router-dom";
import { RiHome9Fill, RiHandCoinFill, RiQuestionFill, RiBarChartHorizontalLine, RiSearchLine, RiShoppingCartLine, RiBowlFill} from "@remixicon/react";

export default function Navbar(){
  const navItems = [
    {
      name: 'Home',
      icon: <RiHome9Fill className="text-stone-900 w-5 h-5" />,
      type: "link",
      path: "/",
    },
    {
      name: "Menu",
      icon: <RiBowlFill className="text-stone-900 w-5 h-5" />,
      type: "anchor",
      path: "#features",
    },
    {
      name: 'Layanan',
      icon: <RiHandCoinFill className="text-white w-5 h-5" />,
      type: "link",
      path: "/InformasiLayanan",
    },
    {
      name: 'Cara Pesan',
      icon: <RiQuestionFill className="text-stone-900 w-5 h-5" />,
      type: "link",
      path: "/CaraPesan",
    },
  ]

  return(
    <div className="navbar top-0 left-0 fixed z-50 bg-[#3E3F29] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle navbar-icon">
            <RiBarChartHorizontalLine className="text-white w-5 h-5"/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-3 bg-stone-50 rounded-box z-1 mt-3 w-52 p-2 shadow items-start">
            {navItems.map((item, index) => (
            <li
              key={index}
              className={`pb-2 border-b border-[#3E3F29]/50 w-full ${
                index === navItems.length - 1 ? "border-none" : ""
              }`}
            >
              {item.type === "link" ? (
                <Link
                  to={item.path}
                  className={`
                    text-stone-900 text-base flex flex-row items-center gap-2
                    ${
                      item.name === "Layanan"
                        ? "bg-[#BCA88D] text-white hover:bg-[#BCA88D]"
                        : "text-stone-900 hover:text-[#BCA88D]"
                    }`}
                >
                  {item.icon}
                  <span className={
                    `w-[1px] h-5 inline-block 
                    ${
                      item.name === "Layanan" ? "bg-white" : " bg-[#BCA88D]"
                    }`} />
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.path}
                  className="text-stone-900 text-base flex flex-row items-center gap-2"
                >
                  {item.icon}
                  <span className="w-[1px] h-5 bg-[#3E3F29] inline-block" />
                  {item.name}
                </a>
              )}
            </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={'/'} className="text-2xl font-black text-white">
          GuritaYaki.
        </Link>
      </div>
      <div className="navbar-end">
        <SearchBar/>
        <button className="btn btn-ghost btn-circle navbar-icon">
          <div className="indicator">
            <RiShoppingCartLine className="w-5 h-5"/>
            <span className="hidden badge badge-xs indicator-item bg-[#2b2b13] border-0">
              3
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

function SearchBar(){
  return(
    <Link 
      to={'/CariMenu'}
      className="btn btn-ghost btn-circle navbar-icon">
      <RiSearchLine className="w-5 h-5"/>
    </Link>
  )
}