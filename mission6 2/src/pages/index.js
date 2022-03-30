import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/HomePage/Hero';
import FOOTER from '../components/Footer/footer';
import './index.css'

import Fb from '../Images/Facebook.png'
import Yt from '../Images/Instagram.png'
import Ig from '../Images/YouTube.png'

import FOOD from '../Images/food.png'
import BOWELS from '../Images/bowl.png'
import FLEE from '../Images/flea&worm.png'
import GROOM from '../Images/grooming.png'
import ACCESS from '../Images/collar.png'
import House from '../Images/carrier.png'









function Home  () {

  return (   
      <>
      <div>
          <Navbar />
          <div>
            
          </div>
          
          <Hero />

         
      </div>


 <div className='Item1' >
   <div className='IMG1'>
     <img src={FOOD} alt ="FOOD" height={60} width={80} />
    </div>
        <p></p>
  </div>

      

      <div className='Item2' >
        <div className='IMG2'>
          <img src={BOWELS} alt ="Bowels" height={28} width={95} />
        </div>

      </div>

      <div className='Item3' >
        <div className='IMG3'>
          <img src={FLEE} alt ="Flea and worms" height={28} width={90} />
        </div>

      </div>

      <div className='Item4' >
        <div className='IMG4'>
          <img src={GROOM} alt ="Grooming" height={40} width={60} />
        </div>
        
      </div>

      <div className='Item5' >
        <div className='IMG5'>
          <img src={ACCESS} alt ="collar" height={45} width={65} />
        </div>
        <p></p>
      </div>

      <div className='Item6' >
      <div className='IMG6'>
          <img src={House} alt ="collar" height={45} width={65} />
        </div>

      </div>


<div className='blur'>

</div>

      <div className='Autoship'>
            <div className='head1'>
            READY FOR AUTOSHIP?  
            </div>
            <div className='headcontent'>
            Never run out & save up to 20% off 
            <p>with autoship</p>
            </div>

            <button class="button Button1"><p>SHOP</p></button>
            <button class="button Button2"><p>SEE ORDER HISTORY</p></button>
      </div>
      
<div className='BLOG'>

Blog:
<p>Keep up-to-date and cheack out our blogs!</p>


  </div>

  <div class="row">
                <div class="column">
                  <h2>BLOG TITLE</h2>
                  <p>blog content</p>
                </div>
                <div class="column">
                  <h2>BLOG TITLE</h2>
                  <p>blog content</p>
                </div>
                <div class="column">
                  <h2>BLOG TITLE</h2>
                  <p>blog content</p>
                </div>
                <div class="column">
                  <h2>BLOG TITLE</h2>
                  <p>blog content</p>
                </div>
</div>


<div class="footer">
                  <div class="column1">
                  <h2>Help Center</h2>
                  <p>Help & FAQs</p>
                  <p>Returns</p>
                  <p>Shipping & Delivery</p>
                  <p>Orders</p>
                  <p>Autoship</p>
                  <p>My Account</p>
                  <p>Supplier Request</p>
                  <p>Product Request</p>
                </div>


                <div class="column1">
                  <h2>Company Info</h2>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Price Match Pledge</p>

                  <h2>Pet Information</h2>
                  <p>Blog</p>
                  <p>Dog Breed Information</p>
                  <p>Features</p>
                </div>


                <div class="column1">
                  <h2>Term & Pollcies</h2>
                  <p>Privacy Pollcies</p>
                  <p>Membership Terms</p>
                  <p>Sales Terms</p>
                  <p>Terms Of Use</p>
                  <p>Promotional T&C's</p>
                </div>
                <div class="column1">
                  <h2>Stay connected</h2>
                 
                 <p>Facebook</p>
                 <div class="fb">
                    <img src={Fb} alt ="Facebook" height={30} width={30} />
                   </div>

                 <p>Instagram</p>

                 <div class="ig">
                   <img src={Ig} alt ="Instagram" height={30} width={30} />
                   </div>

                 <p>YouTube</p>
                    
                 <div class="yt">
                   <img src={Yt} alt ="Youtube" height={30} width={30} />
                   </div>
                
                
                </div>
    
</div>
  <FOOTER />

<div>
  


</div>













        
          

          </>
       

         
  )
}

export default Home;