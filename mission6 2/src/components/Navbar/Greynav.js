import react from "react";
import {Link} from "react-router-dom"
import {Greynavitems} from "./Greynavitems"
import './Greynav.css'



function Greynavy() {

return (
    <>
    <nav className="greynav">

    <ul className="greynavitems1">

    

     {Greynavitems.map((item) => 

    
 
        <li key={item.id} className={item.cName}>
           <Link className= 'colournav'to={item.path}> {item.tittle} </Link>
        </li>
        
        

    
    )} 
    </ul>

    </nav>
    </>
)

}

export default Greynavy