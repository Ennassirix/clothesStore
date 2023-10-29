import React from 'react'
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import Accordion from 'react-bootstrap/Accordion';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Product({ img, title, description, price, rating, id }) {
    return (
        <div className="col-sm" key={id}>
            <div className="card mt-3" style={{ width: '18rem' }}>
                <div className="card-body">
                    <img src={img} alt="photo" className='card-img-top' style={{ width: '100px' }} />
                    <h4 className="card-title" style={{ fontSize: '18px' }}>{title}</h4>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><small className='text-secondary'>See More</small></Accordion.Header>
                            <Accordion.Body>
                                {description}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
                <div className="card-footer d-flex justify-content-between">
                    <Chip label={`$${price}`} />
                    <button className='cart'><AddShoppingCartIcon className='text-success' /></button>
                    <Chip icon={<StarIcon className='text-warning'/>} label={`${rating}/5`}/>
                </div>
            </div>
        </div>

    )
}
