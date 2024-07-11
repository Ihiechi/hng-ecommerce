
// import React, { useState } from 'react';
// import "./navbar.css";
// import SearchIcon from "../../assets/imgs/search.png"
// import CartIcon from "../../assets/imgs/cart.png"
// import UserIcon from "../../assets/imgs/user.png"
// import { FaBars } from "react-icons/fa";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//     <nav id='navbar'>
//       <p>ShoeBank</p>
//       <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
//         <li><a href="">Home</a></li>
//         <li><a href="">Shop</a></li>
//         <li><a href="">About</a></li>
//         <li><a href="">Blog</a></li>
//         <li><a href="">Contact</a></li>
//       </ul>
//       <ul className='navitems'>
//         <li><img src={SearchIcon} alt="" /></li>
//         <li><img src={CartIcon} alt="" /></li>
//         <li><img src={UserIcon} alt="" /></li>
//       </ul>
//       <div className='hamburger' onClick={toggleMenu}>
//         <FaBars />
//       </div>
//     </nav>
//   )
// }
import React from 'react'

export default function Navbar() {
  return (
    <div>Navbar</div>
  )
}
