import React from "react";
import{Link} from 'react-router-dom'
const Navbar = () => {
return (
    <div>
        <h3>big <span className="boy">boy</span></h3>
     <ul className ="list">
        <li> <Link to='/'> Home</Link></li>
        <li><Link to='/products' >products</Link></li>
        <li><Link to='/details' >details</Link></li>
        <li><Link to='/contacts' >contacts</Link></li>
     </ul>
    </div>
);

}
 export default Navbar;