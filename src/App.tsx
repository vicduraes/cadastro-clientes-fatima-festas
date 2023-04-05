import React from 'react'
import Button from './components/button'
import InputText from './components/input-text'

function App() {
  return (
    <div className="App">
      <p>TESTE</p>
      <div>
        <Button></Button>
        <InputText
          labelProp="teste"
          valueProp=""
          typeProp="text"
          onChange={() => {
            console.log('Olá')
          }}
        ></InputText>
      </div>
    </div>
  )
}

export default App
