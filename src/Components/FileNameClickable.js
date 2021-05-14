import '../Styles/FileNameClickable.css'

function FileNameClickable(props) {
  return (
    <div className="File-name-clickable" onClick={props.onClick}>
      <p className="file-name">{props.name}</p>
      <div className="delete-icon" id={props.id}>X</div>
    </div>
  )
}

export default FileNameClickable