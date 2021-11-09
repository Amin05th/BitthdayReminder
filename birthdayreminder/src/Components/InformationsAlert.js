import React, {useState} from 'react'
import {Monthdays, Monthname} from '../AutomationOfWork/Monthcards'
import {Button, Modal, Dropdown} from 'react-bootstrap'
import { useProvider } from '../AutomationOfWork/NameDateProvider'


export default function InformationsAlert({hide, Year}) {

    const [Index, sendIndex] = useState(0)
    const [Day, setDay] = useState()
    const [Month, setMonth] = useState()
    const {createDate} = useProvider()
    const EXACTDAYINDEX = Day - 1

    function onSubmit(e){
        e.preventDefault()
        createDate(EXACTDAYINDEX, Index, Year)
        hide()
    }

    return (
        <form className = 'w-100' style = {{height: '50vh'}}>
            <Modal.Header>
                <Button className = 'bg-danger' style = {{position: 'absolute', right: '0', top: '0'}} onClick = {hide}>X</Button>
                <h2 className = 'w-100 d-flex justify-content-center'>Choose Date</h2>
            </Modal.Header>
            <Modal.Body className = 'd-flex h-50 align-items-center justify-content-center' style = {{gap: '30px'}}>
                <Dropdown>

                    <Dropdown.Toggle variant="success">
                        {Day}
                    </Dropdown.Toggle>

                    <Dropdown.Menu> 
                    {Monthdays()[Index].map((Days, Index) => {
                        return  <Dropdown.Item key = {Index} onClick = {() => {setDay(Days)}}>
                                    {Days}
                                </Dropdown.Item> 
                    })}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>

                    <Dropdown.Toggle variant="success">
                        {Month}
                    </Dropdown.Toggle>
                        
                    <Dropdown.Menu>
                    {Monthname().map((Month, Index) => {
                        return  <Dropdown.Item key = {Index} onClick = {() => {sendIndex(Index); setMonth(Month)}}>
                                    {Month}                                    
                                </Dropdown.Item>
                    })}
                    </Dropdown.Menu>
                </Dropdown>
                <Button onClick = {onSubmit} type = 'submit' style = {{position: 'absolute', bottom: '0', right: '10%'}}>Submit</Button>
            </Modal.Body>
        </form>
    )
}
