import React from 'react'

export default function Categories() {
    return (
        <div>
            <h3>Categories</h3>
            <ul className='d-flex justify-content-between list-unstyled border p-2 bg-dark'>
                <li className='p-1 text-warning'>men's clothing</li>
                <li className='p-1 text-warning'>women's clothing</li>
                <li className='p-1 text-warning'>electronics</li>
                <li className='p-1 text-warning'>jewelery</li>
            </ul>
        </div>
    )
}
