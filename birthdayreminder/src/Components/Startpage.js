import React, {useRef} from 'react'
import {Container,Button, Form} from 'react-bootstrap'

export default function Startpage({onNameSubmit}) {

    const nameRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        onNameSubmit(nameRef.current.value)
        Notification.requestPermission()
    }

    

    return (
        <Container className = 'd-flex align-items-center' style = {{height: '100vh'}}>
            <Form onSubmit = {(e) => handleSubmit(e)} className = 'w-100'>
                <Form.Control ref = {nameRef}/>
                <Button type = 'submit'className = 'mt-3'>Create Calender</Button>
            </Form>
        </Container>
    )
}