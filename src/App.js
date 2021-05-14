import FileInput from './Components/FileInput'
import FileNameClickable from './Components/FileNameClickable'
import './App.css'
import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [fileList, setList] = useState([])
  
  function updateFileArray(e) {
    setCount(count + e.target.files.length)
    const temp = fileList
    const length = fileList.length
    for (let i=0; i<e.target.files.length; i++) {
      temp.push(e.target.files[i])
      //Start assigning keys from first new file
      temp[length + i].key = '_' + Math.random().toString(36).substr(2, 9)
    }
    setList(temp)
  }

  function removeFileFromArray(e) {
    console.log(e.target.id)
    const temp = fileList
    console.log(temp)
    for (let i=0; i<temp.length; i++) {
      if (temp[i].key === e.target.id) {
        temp.splice(i, 1)
        console.log('removed' + e.target.id)
      }
    }
    setList(temp)
  }

  useEffect(() => {
    console.log('render')
    console.log(count)
    console.log(fileList)
  })

  return (
    <div className="App">
      <FileInput onChange={updateFileArray} />
      <p>There are {count} files selected currently</p>
      <div>{fileList.map(file => <FileNameClickable name={file.name} key={file.key} id={file.key} onClick={removeFileFromArray}/>)}</div>
    </div>
  )
}

export default App