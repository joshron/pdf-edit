import Button from './Components/Button'
import TextBlock from './Components/TextBlock'
import FileInput from './Components/FileInput'
import './App.css'
import React, { useState } from 'react'

function App() {
  //Dealing with attaching uploaded pdfs to array
  const [pdfArray, setpdfArray] = useState([])
  function pushPdfArray(e) {
    const currentState = pdfArray
    for (let i=0; i<e.target.files.length; i++) {
      currentState.push(e.target.files[i])
      console.log(pdfArray)
    }
    setpdfArray(currentState)
  }
  console.log(pdfArray)

  //Display names of files as p elements
  function names() {
    for (let i=0; i<pdfArray.length; i++) {
      return <TextBlock name={pdfArray[0].name} />
    }
  }  

  return (
    <div className="App">
      <FileInput onChange={pushPdfArray}/>
      <Button />
      <TextBlock name={pdfArray[0].name} />
    </div>
  )
}

export default App