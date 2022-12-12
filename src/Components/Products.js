import { useEffect } from 'react';
import ProductItem from './ProductItem.js';
import styled from 'styled-components';

const Products = ({ setItems, items }) => {

    const NUMBER_OF_ITEMS = 10;

    useEffect (() => {
        const loadItems = async () => {
            setItems(await fetchItems(NUMBER_OF_ITEMS));
        }

        loadItems();
    }, []);

    const fetchItems = async (number) => {
        const items = {};

        for (let i = 1; i <= number; i++) {
            const fakestoreURL = `https://fakestoreapi.com/products/${i}`;
            const response = await fetch(fakestoreURL);
            const item = await response.json();
            const id = item.id;
            const price = parseFloat(item.price).toFixed(2);
            const image = item.image;
            const title = item.title;
            items[id] = { price, title, image};
        }
        
        return items;
    }

    const displayItems = () => {
        const display = [];

        for (const id in items) {
            display.push (
                <ProductItem 
                key={id} 
                title={items[id]['title']} 
                price={items[id]['price']} 
                image={items[id]['image']}
                />
            )
        }

        return display;
    }

    const itemsOnDisplay = displayItems();

    return (
        <DisplayItems>
            {itemsOnDisplay}
        </DisplayItems>
    )
}

export default Products;

const DisplayItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat (3, auto);
    gap: 30px;
    max-width: 1100px;
`