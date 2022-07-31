// import React from "react";  
// import {Link} from "react-router-dom";
// import './navbar.css'; 
// function Navbar(){

//         return( 
//             <> 
//             <div className="container"> 
//                 <div className="news"> 
//                     <img className="logo"src="brkn3.png" alt=""/> 
//                     <h2>News</h2> 
//                 </div> 
//                 <div className="home" > 
//                   <Link className="ho" to="/">Home</Link> 
//                   <Link className="abo" to="/about">About</Link>
//                   <Link className="lim" to="/contact">Contact us</Link> 
//                 </div> 
 
//                 { <div className="button"> 
//                     <Link className="btn1"  to ="/login" >User Details</Link> 
                    
//                 </div>  
// }
//              </div>  
             
 
//           </> 
//         ) 
//     } 
 
// export {Navbar};

import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-child">
          <img className = "img" src="n123.png" alt="logo" />
          <h3 className="h3">News</h3>
        </div>
        <div className="navbar-child">
         
            <Link className = "link" to="/">Home</Link>
            <Link className = "link" to="/About">About</Link>
            <Link className = "link" to="/contact">Contact Us</Link>
          
        </div>
        <div className="navbar-child">
          <Link className="nav-btn" to="/login">User Login Form</Link>
         
        </div>
      </div>
     
    </nav>
  );
}
export {Navbar}