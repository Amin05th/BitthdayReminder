import React, {useContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import {UseAdditionalInfo} from './additionalInformation'

const CreateProvider = React.createContext()

export function useProvider(){
    return useContext(CreateProvider)
}

export function Provider({children}) {
    const [saveToLocalStorage,setSaveToLocalStorage] = useLocalStorage('PersonalInfo', [])
    const [Store, setStore] = useState([])
    const {saveAddInfoToLocalStorage} = UseAdditionalInfo()
    const ExactDateIndex = 1
    const takeDate = new Date()
    const takeYear = takeDate.getFullYear()
    const takeDay =  takeDate.getDate() - ExactDateIndex
    const takeMonth = takeDate.getMonth()


    function createDate(Day, Month, Year){
        setStore(prevState => {
            const PrevState = [...prevState,{Day, Month, Year}]
            return PrevState.slice(-1)
        })
    }

    function createUser(Name){
        setSaveToLocalStorage(prevState => {
            const PrevState = Store.map(prevstate => {
                    return prevstate  
            })
            const Date = [...prevState, {Name, Date: PrevState}]
            return Date
        })
        return 
    }
    
    const AddInfoToModal = saveToLocalStorage.map((Localstorage, NameDateIndex) => {

        const LocalstorageDay = Localstorage.Date.map(Date => {
            return Date.Day
        })
        const LocalstorageMonth = Localstorage.Date.map(Date => {
            return Date.Month
        })

        const name = Localstorage.Name

        const GiftLocalStorage = saveAddInfoToLocalStorage.map((Gift, IndexNumber) => {
            const Index = (IndexNumber === NameDateIndex)
            if(Index) return Gift.Gift
            else return null
        })

        const NotificationLocalStorage = saveAddInfoToLocalStorage.map((Notification, IndexNumber) => {
            const Index = (IndexNumber === NameDateIndex)
            if(Index) return Notification.Notification
            else return null
        })

        const Notification = NotificationLocalStorage.join('')
        const Gift = GiftLocalStorage.join('')

        return [Localstorage, {LocalstorageDay, LocalstorageMonth, name, Gift, Notification}]
    })

    saveToLocalStorage.map(save => {
       return saveAddInfoToLocalStorage.map(AddInfo => {
                return save.Date.map(Date => {
                    if(Date.Month === takeMonth){
                        if(Date.Day === takeDay){
                            if(Notification.permission === 'granted') return new Notification('New message from Birthdayreminder',{
                                body: `${save.Name} has Birthday today the Gift is: ${AddInfo.Gift} and the Notification is: ${AddInfo.Notification}`
                            })
                            else return null
                        }
                        else return null  
                    }   else return null
                })
            })
        })

    const value = {
        createUser,
        saveToLocalStorage,
        createDate,
        Info:AddInfoToModal,
        takeYear,
        Store,
    }
    

    return (
        <CreateProvider.Provider value = {value}>
            {children}
        </CreateProvider.Provider>
    )
}