import { useEffect } from 'react';
import ProductItem from './ProductItem.js';
import styled from 'styled-components';

const Products = ({ setItems, items, addItem }) => {

    useEffect (() => {
        const loadItems = async () => {
            setItems(await fetchItems());
        }

        loadItems();
    }, []);

    const fetchItems = async () => {

        const fakestoreURL = `https://fakestoreapi.com/products`;
        const response = await fetch(fakestoreURL);
        const items = await response.json();
        
        return items;
    }

    const displayItems = () => {
        const display = [];

        for (const id in items) {
            display.push (
                <ProductItem 
                key={id} 
                id={id}
                title={items[id]['title']} 
                price={items[id]['price']} 
                image={items[id]['image']}
                addItem={addItem}
                />
            )
        }

        return display;
    }

    const itemsOnDisplay = displayItems();

    return (
        <Container>
             <DisplayItems>
                {itemsOnDisplay}
            </DisplayItems>
        </Container>
       
    )
}

export default Products;

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.backgroundgrey };
    padding: 30px 0px;
`

const DisplayItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat (3, auto);
    gap: 30px;
    max-width: 1100px;
`
