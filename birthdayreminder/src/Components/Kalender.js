import React, {useEffect, useReducer} from 'react'
import {Container} from 'react-bootstrap'
import KalenderCards from './KalenderCards'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import {useProvider} from '../AutomationOfWork/NameDateProvider'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state,action){
    switch (action.type){
        case ACTIONS.INCREMENT:
            return state + 1
        case ACTIONS.DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default function Kalender({StoreYear}){
    const {takeYear} = useProvider()
    const [Year, dispatch] = useReducer(reducer, takeYear)

        useEffect(()=> {
            StoreYear(Year)
        })
        

    function increaseYear() {
        dispatch({type: ACTIONS.INCREMENT})
    }

    function decreaseYear(){
        dispatch({type: ACTIONS.DECREMENT})
    }

    return (
        <Container fluid>
                <div className = 'd-flex justify-content-center w-100' style = {{height: '10%'}}>
                    <h1>Year {Year}</h1>
                </div>

                <div className = 'flex-grow-1 h-100'>
                    <GoChevronLeft style = {{position: 'fixed', bottom: '50%'}} onClick = {decreaseYear}/>
                        <KalenderCards Year = {Year}/>
                    <GoChevronRight style = {{position: 'fixed', bottom: '50%', right: '2%'}} className = 'd-flex' onClick = {increaseYear}/>
                </div>
 
        </Container>
    )
}