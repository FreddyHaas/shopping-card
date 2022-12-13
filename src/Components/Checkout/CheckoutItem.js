import React from 'react';
import styled from 'styled-components';

const CheckoutItem = ( { title, image, orderData, totalSpendPerItem, addItem, removeItem, id }) => {
    return (
        <Itemwrapper>
            <Image src={image} alt={title}/>
            <Content>
                <Title>{title}</Title>
                <Pricetotal>{totalSpendPerItem} $</Pricetotal>
                <EditOrder>
                    <RemoveButton onClick={removeItem} id={id}>-</RemoveButton>
                    <CurrentOrder>{orderData}</CurrentOrder>
                    <AddButton onClick={addItem} id={id}>+</AddButton>
                </EditOrder>
            </Content>
        </Itemwrapper>
    )
}

const Itemwrapper = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
`

const Image = styled.img`
    max-height: 120px;
    max-width: 120px;
`

const Content = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 900;
    height: 24px;
    width: 140px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow:hidden;
`

const Pricetotal = styled.div`
    font-size: 18px;
`

const EditOrder = styled.div`
    display: flex;
    width: 140px;
    justify-content: space-between;
    align-items: center;

`

const RemoveButton = styled.button`
    height: 40px;
    width: 40px;
    font-size: 30px;
    border: none;
`

const CurrentOrder = styled.div`
    font-size: 20px;
`

const AddButton = styled.button`
    height: 40px;
    width: 40px;
    font-size: 30px;
    border: none;
`

export default CheckoutItem;