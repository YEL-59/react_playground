import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 p-5">
      <div className="container mx-auto flex justify-between items-center">
       
        <Link to="/" className="text-xl font-bold">
          Logo
        </Link>

      
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

  
        <ul
          className={`md:flex md:flex-row md:gap-5 md:static md:bg-transparent absolute top-full left-0 w-full bg-gray-200 p-5 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-2 md:py-0">
            <Link to="/" className="block md:inline">Home</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/about" className="block md:inline">About</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/login" className="block md:inline">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
