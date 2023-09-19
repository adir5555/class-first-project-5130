
import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



const Navbar = () => {
    const [open, setopen]= useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/contact', name: 'Contact', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/dashboard', name: 'Dashboard', id: 5 },
      ];
      
      
       
  
    return (
        <nav className="bg-orange-200 p-6 text-orange-500">
          
          <div className="md:hidden" onClick={()=> setopen(!open)}>
            {
                open === true ? <AiOutlineClose className="text-4xl"></AiOutlineClose>:
                  <AiOutlineMenu className="text-4xl "></AiOutlineMenu>
            }

         
          </div>
           <ul className={`md:flex absolute duration-500 
           ${ open ? 'top-6':'-top-40'}
            bg-red-200 px-6`}>
           {
            routes.map(route => <Link  key={route.id}
                 route={route}></Link>)
           }
           </ul>
        </nav>
    );
};

export default Navbar;