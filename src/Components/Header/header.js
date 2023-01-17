import React from "react";
import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
import TotalItems from "./totalItems.js";
import { Link } from "react-router-dom";

const Header = ({ totalQuantity, togglePopup }) => {
  return (
    <Container>
      <Navbar>
        <LogoLink to="/">
          <Logo>FakeStore</Logo>
        </LogoLink>
        <NavbarRight>
          <NavbarLink to="/">
            <Navigator>Home</Navigator>
          </NavbarLink>
          <NavbarLink to="/products">
            <Navigator>Products</Navigator>
          </NavbarLink>
          <NavbarLink to="/contact">
            <Navigator>Contact</Navigator>
          </NavbarLink>
          <Basketcontainer onClick={togglePopup}>
            <HiShoppingCart color="black" fontSize="28px" />
            <TotalItems totalQuantity={totalQuantity} />
          </Basketcontainer>
        </NavbarRight>
      </Navbar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1000px) {
    height: 100px;
  }
  @media (max-width: 600px) {
    height: auto;
  }
`;

const Navbar = styled.div`
  width: min(1100px, 100%);
  display: flex;
  margin: 0px 10px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0px;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.turquoise};
  align-items: center;
`;

const Logo = styled.div`
  width: 60%;
  font-size: 70px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.turquoise};
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    font-size: 55px;
  }

  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const NavbarRight = styled.div`
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  width: min(400px, 50%);
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    width: fit-content;
    justify-content: center;
    gap: 20px;
  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Navigator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Basketcontainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 1000px) {
    height: 40px;
    width: 40px;
  }
`;
