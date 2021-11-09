import React, {useState} from 'react'
import Kalender from './Kalender'
import CreateInfo from './CreateInfo'

export default function Mainboard() {
    const [StoreYear, setYear] = useState()

    return (
        <div className = 'd-flex flex-column' style = {{height: '100%'}}>
            <Kalender StoreYear = {setYear}/>
            <CreateInfo Year = {StoreYear}/>
        </div>
    )
}
