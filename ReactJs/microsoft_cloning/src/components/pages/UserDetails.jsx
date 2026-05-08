import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaSearchSolid } from "react-icons/lia";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
const UserDetails = () => {
  return (
    <div id="userdetails">

       <div id="am">
         <div ><a className="hover" href="">All Microsoft</a>  </div>
        <div id="drop"><MdKeyboardArrowDown /></div>
       </div>

       <div id="search">
         <div ><a className="hover" href="">Search</a>  </div>
        <div id="search-icon"><LiaSearchSolid /></div>

       </div>

         <div id="cart">
         <div ><a className="hover" href="">Cart</a>  </div>
        <div id="cart-icon"><BsCart3 /></div>

       </div>

       <div id="img">
       
       <FaRegUser /><span style={{ marginLeft: '5px', fontSize: '20px' }}>M</span>
       </div>

    </div>
  )
}

export default UserDetails