import { IoPauseCircleOutline } from "react-icons/io5";
import { BsChevronLeft } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";

const Home = () => {
  return (
   <div id="home">
     <div id="scroll">
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-AI-7Ed-Sapphire-MC001-3000x1682:VP5-1920x600" alt="" />
   

     <div id="textinpicture">
     <div id="uptext"><a href="">Meet Surface Laptop</a></div>
     <div id="midtext"><a href="">Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop.</a></div>
     <button className="learn"><a href="">Learn more</a></button>
     </div>
   </div>
   
   <div id="bars">

    <div id="pause-container">
     <a href="">   <div id="pause" ><IoPauseCircleOutline /></div></a>
    </div>

     <a id="left-container" href=""><div >
     <div id="leftarrow"><BsChevronLeft /></div>
    </div></a>

     <div id="black-container">
     <div id="blackdot"><GoDotFill /></div>
    </div>

      <div id="white-container">
     <div id="whitedot"><GoDot /></div>
    </div>


     <a id="right-container" href=""><div >
     <div id="right"><BsChevronRight /></div>
    </div></a>

   </div>


   <div id="shops">

    <div id="first">
        <a href=""><img className="image" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="" /></a>
    <a  className="text" href=""> Choose your microsoft 365</a>
    </div>
    <div id="second">
        <a href=""><img className="image" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40" alt="" /></a>
    <a  className="text" href="">Shop Xbox</a>
    </div>
    <div id="third">
           <a href=""> <img className="image" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="" />
    <a  className="text" href="">Get Windows 11</a></a>
    </div>
    <div id="fourth">
       <a href=""> <img className="image" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40" alt="" /></a>
         <a  className="text" href="">Explore Surface devices</a>
    </div>
   </div>


  
  </div>
   






  )
}

export default Home