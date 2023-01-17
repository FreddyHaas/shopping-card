import React from "react";
import styled from "styled-components";
import CheckoutItem from "./CheckoutItem.js";

const Checkout = ({
  popupActive,
  togglePopup,
  totalPrice,
  items,
  orderData,
  totalSpendPerItem,
  addItem,
  removeItem,
}) => {
  const displayItems = () => {
    const display = [];

    for (const id in items) {
      if (parseInt(orderData[id]) >= 1) {
        display.push(
          <CheckoutItem
            key={id}
            id={id}
            title={items[id]["title"]}
            image={items[id]["image"]}
            orderData={orderData[id]}
            totalSpendPerItem={totalSpendPerItem[id]}
            addItem={addItem}
            removeItem={removeItem}
          />
        );
      }
    }

    return display;
  };

  const itemsOnDisplay = displayItems();

  if (popupActive === false) {
    return;
  } else {
    return (
      <Container onClick={togglePopup}>
        <Cart onClick={(e) => e.stopPropagation()}>
          <Header>Your shopping cart</Header>
          <ItemsDisplay>{itemsOnDisplay}</ItemsDisplay>
          <Total> Total: {totalPrice} $</Total>
          <ButtonContainer>
            <CheckoutButton>
              Checkout <Span>(not implemented)</Span>
            </CheckoutButton>
            <CloseButton onClick={togglePopup}>Close</CloseButton>
          </ButtonContainer>
        </Cart>
      </Container>
    );
  }
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  right: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  z-index: 3;
`;

const Cart = styled.div`
  height: 100vh;
  width: 500px;
  background-color: rgb(255, 255, 255);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 38px;
  font-weight: 900;
`;

const ItemsDisplay = styled.div`
  width: 100%;
  max-height: 350px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Total = styled.div`
  font-size: 28px;
  font-weight: 900;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const CheckoutButton = styled.button`
  font-size: 24px;
  font-weight: 900;
  border: none;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  width: 100%;
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  }
`;

const CloseButton = styled.button`
  font-size: 24px;
  font-weight: 900;
  border: none;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.red};
  width: 100%;
  cursor: pointer;
  &: hover {
    opacity: 0.85;
  }
`;

const Span = styled.span`
  font-weight: 400;
  font-style: italic;
`;

export default Checkout;
