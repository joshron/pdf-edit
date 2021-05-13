import '../Styles/FileInput.css'

function FileInput(props) {

  return (
    <div className="FileInput">
      <label htmlFor="input">Add PDF's for editing</label>
      <input type="file" name="input" id="input" accept="application/pdf" onChange={props.onChange} multiple />
    </div>
  )
}

export default FileInput