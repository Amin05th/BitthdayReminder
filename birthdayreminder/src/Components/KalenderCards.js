import React from 'react'
import {Container, Card, ListGroup} from 'react-bootstrap'
import {Monthname, Monthimg} from '../AutomationOfWork/Monthcards'
import {KalenderDays} from './KalenderDays'

export default function KalenderCards({Year}) {

    return(
        <Container style = {{display: 'grid', gridTemplateColumns: 'repeat(6, 17%)'}}>
            {Monthname().map((Month, Index) => {
        return  <Card key = {Index} className = 'm-3' style = {{width: '80%',height: '11rem', border: 'solid black 1px'}}>
                        <Card.Img style = {{height: '40px'}} variant = 'top' src = {Monthimg()[Index]} alt = 'Your Browser does not support the PIcture function'/>
                    <Card.Body>
                        <ListGroup>
                            <KalenderDays Year = {Year} sendIndex = {Index}/>
                        </ListGroup>
                    </Card.Body>
                </Card>                        
    })}
        </Container>
    )

}
