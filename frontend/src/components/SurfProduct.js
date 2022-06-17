import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const SurfProduct = ({ surfProduct }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/surfProduct/${surfProduct._id}`}>
        <Card.Img src={surfProduct.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/surfProduct/${surfProduct._id}`}>
          <Card.Title as='div'>
            <strong>{surfProduct.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={surfProduct.rating}
            text={`${surfProduct.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h4'>€{surfProduct.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SurfProduct
