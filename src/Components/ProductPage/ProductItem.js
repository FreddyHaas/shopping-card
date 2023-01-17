import React from "react";
import styled from "styled-components";

const ProductItem = ({ id, title, price, image, addItem }) => {
  return (
    <ItemWrapper>
      <ImageSection>
        <Image src={image} alt={title} />
      </ImageSection>
      <ContentSection>
        <ProductInfo>
          <Title>{title}</Title>
          <Price>{price.toFixed(2)} $</Price>
        </ProductInfo>
        <Button id={id} onClick={addItem}>
          Add to cart
        </Button>
      </ContentSection>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.bordergrey};
  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageSection = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bordergrey};
`;

const Image = styled.img`
  max-height: 150px;
  max-width: 150px;
`;

const ContentSection = styled.div`
  flex: 1 1 auto;
  width: 100%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
`;

const ProductInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
`;
const Price = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blackHover};
  }
`;

export default ProductItem;
