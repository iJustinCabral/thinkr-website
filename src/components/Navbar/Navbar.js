import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MenuIcon, 
         NavMenu, NavItem, NavLinks, NavBtnLink, NavItemBtn } from './Navbar.elements'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
      <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick={closeMobileMenu}>
                    <NavIcon />
                    Thinkr 
                </NavLogo>

                <MenuIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MenuIcon>

                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/dao'>
                            DAO
                        </NavLinks>
                    </NavItem>
               
               
                    <NavItem>
                        <NavLinks to='/roadmap'>
                            Roadmap
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/team'>
                            Team
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/faq'>
                            FAQ
                        </NavLinks>
                    </NavItem>
               
                </NavMenu>

            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
  );
};

export default Navbar;

/*
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/connect">
                                <Button fontBig primary>Connect Wallet</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/connect">
                                <Button fontBig primary>
                                    Connect Wallet
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
*/