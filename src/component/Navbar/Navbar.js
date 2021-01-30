import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.element';   


const Navbar = () => {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);


   const handleClick = () => setClick(!click);

   const showButton = () => {
       if(window.innerWidth <= 960) {
           setButton(false)
       }else {
           setButton(true)
       }
   }

   useEffect(() => {
       showButton() 
   }, [])

   window.addEventListener('resize', showButton);

    return (
        <>
         <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        BUCICS
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Product</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Contact Us</NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/login">
                                    <Button primary>Login</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/login">
                                    <Button fontBig primary>
                                       Login
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
         </IconContext.Provider>  
        </>
    )
}

export default Navbar
