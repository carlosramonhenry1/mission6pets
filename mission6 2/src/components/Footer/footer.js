import React from 'react'
import'./footer.css';

import Master from './Mastercard.jpeg';
import Visa from './visa.png';
import Express from './amex.png'
import LayBuy from './laybuy.png'
import AfterPay from './afterpay.png'



function FOOTER() {
        return(



          <div class ="cardfooter" >

<div class="Mc">
<img src={Master} alt ="MasterCard" height={100} width={150} />
</div>



<div class="VISA">
<img src={Visa} alt ="Visa" height={100} width={150} />
</div>


<div class="Express">
<img src={Express} alt ="Visa" height={100} width={150} />
</div>


<div class="Laybuy">
<img src={LayBuy} alt ="Visa" height={100} width={150} />
</div>



<div class="Afterpay">
<img src={AfterPay} alt ="Visa" height={100} width={150} />
</div>
            
    </div>



        );
    }
    
    export default FOOTER