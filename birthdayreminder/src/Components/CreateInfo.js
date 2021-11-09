import React, {useState, useRef} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import InformationsAlert from './InformationsAlert'
import {useProvider} from '../AutomationOfWork/NameDateProvider'
import { UseAdditionalInfo } from '../AutomationOfWork/additionalInformation'


export default function CreateInfo({Year}) {
    const [openModal, setopenModal] = useState(false)
    const NameRef = useRef()
    const GiftRef = useRef()
    const NotificationRef = useRef()
    const {createUser, Store} = useProvider()
    const {createAdditionalInfo} = UseAdditionalInfo()
    
    
    function closeModal(){
        return setopenModal(false)
    }

    function NoticeButton(){
        if(Store.length === 0)return window.alert('Date is missing')
        createUser(NameRef.current.value)
        createAdditionalInfo(GiftRef.current.value,NotificationRef.current.value)
    }

    return (
        <div>  
            <Form onSubmit = {NoticeButton} className = 'border-top border-dark d-flex' style = {{height: '23vh', textAlign: 'center'}}>
                <Form.Group style = {{width: '20%'}}>
                    <Form.Label htmlFor = 'Name'>Name</Form.Label>
                    <Form.Control id = 'Name' ref = {NameRef} required as = 'textarea' style = {{width: '70%', marginLeft: '17%', resize: 'none'}}/>
                </Form.Group>
                <Form.Group style = {{width: '25%'}}>
                    <Form.Label >Date</Form.Label>
                    <Form.Control onClick = {() => setopenModal(true)} required type= 'button' style = {{width: '70%', marginLeft: '17%'}} value = {'Date'}/>
                </Form.Group>
                <Form.Group style = {{width: '25%'}}>
                    <Form.Label htmlFor = 'Gift'>Gift</Form.Label>
                    <Form.Control id = 'Gift' required as = 'textarea' ref = {GiftRef} style = {{width: '70%', marginLeft: '17%', resize: 'none'}}/>
                </Form.Group>
                <Form.Group style = {{width: '25%'}}>
                    <Form.Label htmlFor = 'Notification'>Notification</Form.Label>
                    <Form.Control id = 'Notification' required ref = {NotificationRef} as = 'textarea' style = {{width: '70%', resize: 'none', marginLeft: '17%'}}/>
                </Form.Group>
                <Button type = 'submit' className = 'rounded-0'>Notice</Button>
            </Form>

            <Modal show = {openModal}>
                <InformationsAlert hide = {() => closeModal()} Name = {NameRef} Year = {Year}/>
            </Modal> 
        </div>
    )
}