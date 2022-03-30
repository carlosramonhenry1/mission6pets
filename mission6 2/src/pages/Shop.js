import React from 'react';
import Greynavy from '../components/Navbar/Greynav';
import Navbar from "../components/Navbar/Navbar";
import './Shop.css'

import CONTENT from '../components/Products';
import DATANAV from '../components/Navbar/databasenav';




const Shop = () => {

  return (    
    <>
    <div>
     <Navbar /> 
     <Greynavy/>
      </div>
<div className = 'header1'>
          <div className = 'title'>
            Dry Dog and Puppy Food
          </div>
    </div>
    
<div className = 'Background'>


      <div className ='display'>




            <div className ='Buttonlistpage'> 

                <div className ='PreviousButton'>
                  
                <a href="#" class="previous round"><i class="arrow left"></i></a>
                </div>

                <p>Page 1/6</p>
                
                <div className ='NextButton'>
                  
                <a href="#" class="next round"><i class="arrow right"></i></a>
                </div>  

            </div>




            <div className ='Buttonfilter'>
              <p>FILTER </p>
            </div>





            <div className ='Buttonsort'>
              
            </div>



          <div className ='maincontent'>

     
          <CONTENT />
       
        </div>    
          </div>

          <div className ='Foter'>

            <DATANAV />
          </div>
      
</div>


      </>
  );
};

export default Shop;