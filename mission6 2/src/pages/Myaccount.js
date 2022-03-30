import React from 'react'
import Greynavy from '../components/Navbar/Greynav';
import Navbar from '../components/Navbar/Navbar'
import './Myaccount.css'
import Lock from '../Images/lockimage.png'
import navigatetems11 from "./Myaccountitems"
import {Link} from "react-router-dom"
import dogfood33 from '../Images/dogfood33.jpg'

function Myaccount() {
    return (
        <>
        <div>
            <Navbar />
            <Greynavy />
        </div>

        <div className='dontext100'>
            <div className='bontext22'>
                MY ACCOUNT
            </div>
            <div className='lockicon'>
            <img  src={Lock} alt = 'Lock'height={35} with={35}/>
            </div>
        </div>

        <div className='bontext33'>

        <ul className="navigatetems11">
            {navigatetems11.map((item) => 

        <li key={item.id} className={item.cName}>
         <Link className= 'colournav12'to={item.path}> {item.tittle} </Link>

        </li>
                )} 
        </ul>
        
        </div>

        <div className='skinnyline'></div>

        <div className='bontext44'>
            PET DETAILS
        </div>

        <div className='bontext55'>
            <div className='bontext66'>
                PET NAME
            </div>
        </div>

        <div className='skinnyline2'></div>

        <div className='ownerdets'>
        OWNER DETAILS
        </div>

        <div className='firstnamebox'>
            <div className='firstnameboxletter'>
            First Name: Name
            </div>
        </div>

        <div className='lastnamebox'>
            <div className='lastnameletter'>
            Last Name: Name
            </div>
        </div>

        <div className='emailbox'>
            <div className='emailboxletters'>
            Email: example@gmail.com
            </div>
        </div>

        <div className='newpwbox'>
            <div className='newpwletters'>
            New Password
            </div>
        </div>

        <div className='confirmpwbox'>
            <div className='confirmpwletters'>
            Confirm New Password
            </div>
        </div>

        <div className='redsavebox'>
            <div className='redsaveletters'>
            Save changes
            </div>
        </div>
        
        <div className='skinnyline3'></div>

        <div className='lastvieweditems'>
        Last viewed item
        </div>

        <div className='dogfood'>
        <img  src={dogfood33} alt = 'Lock'height={210} with={210}/>
        </div>

        <div className='dogfoodtxt'>
        Royal Canin Maxi Adult Dry Dog Food information
        </div>

        <div className='red-dogbox'>
            <div className='redview'>
                VIEW ITEM
            </div>
        </div>

        <div className='add-chartbox'>
            <div className='add-to-chart'>
                ADD TO CHART
            </div>
        </div>

        <div className='skinnyline4'></div>

        <div className='purchase-history'>
        Purchasing History
        </div>

        <div className='grey-date-box'>
            <div className='date1'>
                DATE
            </div>
        </div>

        <div className='grey-data-box1'>
        <div className='date2'>
                DATE
            </div>
        </div>

        <div className='grey-data-box2'>
            <div className='date2'>
                DATA
            </div>
        </div>

        <div className='upcomingredbox'>
            <div className='Upcoming-orders'>
            Upcoming orders
            </div>
        </div>
        </>
        
    )}


    export default Myaccount;