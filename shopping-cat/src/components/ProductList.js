import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductListTemplate = styled.div
`
    padding: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  
`;
const ProductList = ({products, onSelect}) => {
    return (
        <ProductListTemplate>
            {products.map(product => (
                <Product product={product} key={product.id} onSelect={onSelect}/>
            ))}
        </ProductListTemplate>
    );
};

export default ProductList;