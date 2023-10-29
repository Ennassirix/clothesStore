import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';
import { valueContext } from '../context/ContextValue'
export default function Products() {
    const { value } = useContext(valueContext)
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const filteredProducts = products.filter(product => product.category.includes(value));
    return (
        <div className='row'>
            {
                filteredProducts.map(product => {
                    return <Product img={product.image} title={product.title} description={product.description} price={product.price}
                        rating={product.rating.rate}
                        key={product.id}
                    />
                })
            }
        </div>
    )
}
