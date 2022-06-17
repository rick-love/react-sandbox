import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SurfProduct from '../components/SurfProduct'
import surfProducts from '../surf_products'

const SurfProductScreen = () => {
  return (
    <>
    <h1>Surf Products</h1>
    <Row>
        {surfProducts.map(surfProduct => (
            <Col sm={12} md={6} lg={4} xl={3}>
            <SurfProduct surfProduct={surfProduct} />
            </Col>
        ))}
    </Row>
    </>
    )
}

export default SurfProductScreen