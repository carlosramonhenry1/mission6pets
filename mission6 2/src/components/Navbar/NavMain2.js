import react from "react";
import {Link} from "react-router-dom"
import {NavMain2items} from "./NavMain2items"
import './NavMain2.css'



function NavMain2() {

return (
    <>
    <nav className="navmain2">

    <ul className="navmain2items">

    

     {NavMain2items.map((item) => 

    
        <li key={item.id} className={item.cName}>
           <Link className= 'colournav'to={item.path}> {item.tittle} </Link>
        </li>
        
        

    
    )} 
    </ul>

    </nav>
    </>
)

}

export default NavMain2