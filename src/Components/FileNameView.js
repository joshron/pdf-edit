import React from 'react'

function FileNameView(props) {
  return (
    <>
      {props.fileArray.map(file => <p key={file.name}>{file.name}</p>)}
    </>
  )
}

export default FileNameView