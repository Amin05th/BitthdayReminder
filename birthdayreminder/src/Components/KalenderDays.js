import React, {useState} from 'react'
import {Row, Modal} from 'react-bootstrap'
import {Monthdays} from '../AutomationOfWork/Monthcards'
import InfoModal from './InfoModal'


export function KalenderDays({sendIndex, Year}) {
    const [Openmodal, setopenModal] = useState(false)
    const [DayIndex,setDayIndex] = useState()

    function closeModal(){
       return setopenModal(false)
    }

    function setIndex(Index){
        setDayIndex(Index)
        setopenModal(true)
    }

    return (
        <div className = 'ml-2 p-0' style = {{display: 'grid', gridTemplateColumns: 'repeat(4, 34%)'}}>
            {Monthdays()[sendIndex].map((Days, Index) => {
                return  <Row key = {Index} style = {{cursor: 'pointer', fontSize: '10px'}} onClick = {() => setIndex(Index)}>
                            {Days}
                        </Row>              
            })}

            <Modal show = {Openmodal}>
                <InfoModal hide = {()=> closeModal()} Year = {Year} DayIndex = {DayIndex} MonthIndex = {sendIndex}/>
            </Modal>
                        
        </div>
        
    )
}
