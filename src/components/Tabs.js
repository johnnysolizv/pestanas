import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import { Content } from './Content'
import { Navigation } from './Navigation'

const initialState = [
    { name: 'Tab 1', color: 'secondary' },
    { name: 'Tab 2', color: 'secondary'},
    { name: 'Tab 3', color: 'secondary' },
];

export const Tabs = () => {

    const [tabs, setTabs] = useState(initialState)
    const [content, setContent] = useState('')

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ offset: 3, size: 6 }} sm="12">
                        <Navigation tabs={tabs} setTabs={setTabs} setContent={ setContent }/>
                        <Content content={ content }/>
                    </Col>
                </Row>

            </Container>
        </>
    )
}