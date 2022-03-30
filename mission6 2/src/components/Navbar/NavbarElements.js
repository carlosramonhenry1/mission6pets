
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


// MAIN NAV SECTION IN NAV

export const Nav = styled.nav`

    background: #FFFFFF;
    height: 100 px;
    width: 100%;

    
`;

export const NavMenu = styled.div`

  display: flex;
  align-items: center;
  }
`;



export const NavLink = styled(Link)`

color: #000000;
text-decoration: none;
padding: 0 2.6rem;
cursor: pointer;
&:hover {
  color: grey;
}
`;







// Work div SECTION IN NAV
export const WordSize = styled.div`
font-style: normal;
font-size: 30px;
font-weight: 700;

`;
//
export const SmallSize = styled.div`
font-size: 20px;
`;



// Button icon SECTION IN NAV


export const ButtonContainer = styled.div`  
position: absolute;
left: 920px;
top: 20px;
   
    
`;



// SEARCH BAR SECTION IN NAV
export const NavSearch = styled.div`
  width: 50px;
  height: 20px;
  box-sizing: border-box;
  padding: 0px 250px 0px 70px  

  
`;




// TROLLEY CONTAiNER SECTION IN NAV
export const TrolleyContainer = styled.div`
position: absolute;
    width: 60px;
    height: 60px;
    left: 1190px;
    top: 10px;
    
    background: #C4C4C4;
    border: 1px solid #A7A7A7;
    box-sizing: border-box;
    border-radius: 100px;
    
   

`;
// TROLLEY SECTION IN NAV
export const Trolley = styled.div`
position: absolute;
padding: 13px 0px 0px 15px
 
`

