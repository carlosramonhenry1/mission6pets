import React from "react";
import './Navbar.css'; // Tell webpack that Button.js uses these styles

import logo from './NavIMG/Dog Paw.png'; // Tell webpack this JS file uses this image
import Img0 from './NavIMG/Search.png';
import Img1 from './NavIMG/shopping.png';
import {
    Nav,
    NavLink,
    NavMenu,
    NavSearch,
    TrolleyContainer,
    Trolley,
    WordSize,
    NavInput,
    SmallSize,
    ButtonContainer
} from "./NavbarElements";


const Navbar = () => {
    return (
        <> 
        <Nav>
          
            <NavMenu>

                
                <NavLink 
                      to="/" 
                      activeStyle={{ color:'black' }}
                    >
                      <img src={logo} alt ="logo" height={61} width={61} />

                </NavLink>
                


                <WordSize>
                    <NavLink 
                      to="/Shop" 
                      activeStyle={{ color:'black' }}
                    
                    >
                        Shop
                    </NavLink>
                </WordSize>




                <WordSize>  
                    <NavLink 
                      to="/Blog" 
                      activeStyle={{ color: 'black' }}
                    >
                        Blog
                    </NavLink>
                </WordSize> 



                <WordSize>   
                <NavLink 
                  to="/Delivery" 
                  activeStyle={{ color: 'black' }}
                >
                    Delivery
                    
                </NavLink>
                </WordSize>  




                <WordSize>
                    <NavLink 
                      to="/account" 
                      activeStyle={{ color: 'black' }}
                    >
                        Account
                    </NavLink>
                </WordSize>




                <ButtonContainer>
                    
                        
                            <img src={Img0} alt ="Img0" height={16} width={18}  />
                        
                    
                </ButtonContainer>
                
                <NavSearch>
                    
                    <input 
                    type="text" id="myInput" placeholder="" title="Type in a name">
                    </input>
                   
                </NavSearch>


                <NavLink 
                to="/cart" 
                       activeStyle={{ color: 'black' }}
                >
                <TrolleyContainer>
                      <Trolley>
                      
                       
                     
                            <img src={Img1} alt ="Img1" height={30} width={30} />
                     
                      </Trolley>
                </TrolleyContainer>
                </NavLink>

                <SmallSize>
                  <NavLink 
                    to="/signin" 
                    activeStyle={{ color: 'black' }}
                  >
                      Sign In / SignUp
                      
                  </NavLink>
                </SmallSize>



            </NavMenu> 
        </Nav> 
       
      </>
    );
};
export default Navbar;