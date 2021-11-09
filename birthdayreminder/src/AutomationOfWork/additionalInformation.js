import React, {useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const createAdditionalInformation = React.createContext()

export function UseAdditionalInfo(){
    return useContext(createAdditionalInformation)
}

export function AdditionalInformation({children}) {
    const [saveAddInfoToLocalStorage, setSaveToLocalStorage] = useLocalStorage('AdditionalInfo', [])

    function createAdditionalInfo(Gift, Notification){
        setSaveToLocalStorage(prevState => {
            return [...prevState,{Gift, Notification}]
        })
    }
    
    return (
        <createAdditionalInformation.Provider value = {{createAdditionalInfo, saveAddInfoToLocalStorage}}>
            {children}
        </createAdditionalInformation.Provider>
    )
}