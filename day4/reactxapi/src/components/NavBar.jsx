import { Link } from "react-router-dom";

function NavBar(){
  return (
    <nav className="navbar bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Brand */}
      <div className="navbar-brand text-2xl font-bold">
        <Link to="/" className="hover:text-yellow-400">
          Movie App
        </Link>
      </div>

      {/* Links */}
      <div className="navbar-links flex space-x-6">
        <Link to="/" className="nav-link hover:text-yellow-400 transition-colors">
          Home
        </Link>
        <Link to="/favorites" className="nav-link hover:text-yellow-400 transition-colors">
          Favorites
        </Link>
      </div>
    </nav>
  )
}

export default NavBar