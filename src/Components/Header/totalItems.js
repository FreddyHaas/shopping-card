import React from 'react';
import styled from 'styled-components';
 
const TotalItems = ( { totalQuantity }) => { 
        console.log(totalQuantity);
        if (totalQuantity >= 1) {
            return (
                <Items>
                    {totalQuantity}
                </Items>
            )
        } else {
            return;
        }
}

const Items = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: ${ ({ theme }) => theme.colors.red };
    color: ${ ({ theme }) => theme.colors.black };
    font-size: 20px;
    font-weight: 900;
    display: flex; 
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -5px;
    bottom: -5px;
`

export default TotalItems;