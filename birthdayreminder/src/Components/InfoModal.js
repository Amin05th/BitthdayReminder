import React from 'react'
import {Modal, Button, ListGroup} from 'react-bootstrap'
import {useProvider} from '../AutomationOfWork/NameDateProvider'

export default function InfoModal({MonthIndex, DayIndex, Year, hide}) {
    const Days = DayIndex + 1
    const Month = MonthIndex + 1
    const {Info} = useProvider()

    return (
        <>
            <Modal.Header>
                <Button variant = 'danger' style = {{position: 'absolute', right: '5%'}} onClick = {hide}>X</Button>
                <h1 className = 'd-flex justify-content-center flex-grow-1'>{`${Days}.${Month}.${Year}`}</h1>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {Info.map((Info, Index) => {
                        if(DayIndex === Info[0].Date[0].Day){
                            if(MonthIndex === Info[0].Date[0].Month){
                                return  <ListGroup.Item key = {Index} className = 'border dark'>
                                           <p>{`Name: ${Info[0].Name},`}</p>
                                           <p>{`Gift: ${Info[1].Gift},`}</p>
                                           <p>{`Notification: ${Info[1].Notification},`}</p>
                                        </ListGroup.Item>
                            }else return null
                        }else return null
                    })}
                </ListGroup>
            </Modal.Body>
        </>
    )
}