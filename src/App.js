import React, { useState } from 'react'
import './App.css'

function App() {
  const [textInput, setTextInput] = useState('')
  return (
    <div className="App">
      <input
        name="texto"
        onChange={text => setTextInput(text.target.value)}
        value={textInput}
      ></input>
      {textInput.toUpperCase()}
    </div>
  )
}

export default App
