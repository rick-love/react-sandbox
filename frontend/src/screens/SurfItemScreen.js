import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import surfProducts from '../surf_products'

const SurfItemScreen = () => {
  let navigate = useNavigate()
  const params = useParams()
  const surfItem = surfProducts.find((p) => p._id === params.id)

  return (
    <>
      <Link className='btn btn-dark my-3' to='/surfProducts'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={surfItem.image} alt={surfItem.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{surfItem.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={surfItem.rating}
                text={`${surfItem.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: €{surfItem.price}</ListGroup.Item>
            <ListGroup.Item>Description: {surfItem.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>€{surfItem.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {surfItem.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={surfItem.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default SurfItemScreen
