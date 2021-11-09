import React from 'react'
import { Col, Row } from 'reactstrap'

export const Content = ({ content }) => {
    return (
        <>
            <Row className="tab-content">
                <Col>
                    <h2>{ content }</h2>
                </Col>
            </Row>            
        </>
    )
}