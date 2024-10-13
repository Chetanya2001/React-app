import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(Text.toUpperCase());
    props.showAlert("Converted to Uppercase","success")
  }
  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const handleLcClick = () => {
    setText(Text.toLowerCase())
    props.showAlert("Converted to Lowercase","success")
  }
  const handleClClick = () => {
    setText('')
    props.showAlert("Text is empty now","success")
  }
  const [Text, setText] = useState('Enter Text here')
  return (
    <>
    <div>
       <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-success mx-2" onClick={handleLcClick}>Convert to Lowercase</button>
      <button className="btn btn-danger mx-2" onClick={handleClClick}>Clear Text</button>
   
      
  </div>
  <div className="container my-3 ">
    <h1>Text Summary</h1>
    <p>The sentence contain {Text.length} characters and {Text.split(" ").length} words .</p>
  </div>
</>
  )
}
