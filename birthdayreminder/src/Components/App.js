import React from 'react'
import Startpage from './Startpage'
import Mainboard from './Mainboard'
import useLocalStorage from '../hooks/useLocalStorage'
import {Provider} from '../AutomationOfWork/NameDateProvider'
import {AdditionalInformation} from '../AutomationOfWork/additionalInformation'

function App() {

  const [Name, setName] = useLocalStorage('Name', '')

  const mainboard = (
    <AdditionalInformation>
      <Provider>
          <Mainboard Name = {Name}/>
      </Provider>
    </AdditionalInformation>
  )

  return (
      Name ? mainboard : <Startpage onNameSubmit = {setName} />
  )
}

export default App;
