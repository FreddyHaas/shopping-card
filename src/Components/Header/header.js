import React from 'react';
import styled from 'styled-components';
import { HiShoppingCart } from 'react-icons/hi'
import TotalItems from './totalItems.js';
import { Link } from 'react-router-dom';
 

const Header = ( { totalQuantity, togglePopup }) => {
    return (
        <Container>
            <Navbar>
            <LogoLink to='/'>
                <Logo>FakeStore</Logo>
            </LogoLink>
                <NavbarRight>
                    <NavbarLink to='/'>
                        <Navigator>Home</Navigator>
                    </NavbarLink>                    
                    <NavbarLink to='/products'>
                        <Navigator>Products</Navigator>
                    </NavbarLink>
                    <NavbarLink to='/contact'>
                        <Navigator>Contact</Navigator>
                    </NavbarLink>
                    <Basketcontainer onClick={togglePopup}>
                        <HiShoppingCart color="black" fontSize="28px"/>
                        <TotalItems totalQuantity={totalQuantity}/>
                    </Basketcontainer>
                </NavbarRight>
            </Navbar>
        </Container>
    );
}

export default Header;


const Container = styled.div`
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    background-color: ${ ({ theme }) => theme.colors.black };
`

const Navbar = styled.div`
    width: 1100px;
    display: flex; 
    justify-content: space-between;
`

const LogoLink = styled(Link)`
    text-decoration: none;
    color: ${ ({ theme }) => theme.colors.turquoise };
    display: flex;
    algin-items: center;
`


const Logo = styled.div`
    font-size: 70px;
    font-weight: 900;
    color: ${ ({ theme }) => theme.colors.turquoise };
    display: flex;
    align-items: center;
`

const NavbarRight = styled.div`
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    color: ${ ({ theme }) => theme.colors.white };
`

const NavbarLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const Navigator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Basketcontainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: ${ ({ theme }) => theme.colors.white };
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

