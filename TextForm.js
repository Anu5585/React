import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{

        // console.log("Uppercase was Clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleDownClick = ()=>{

        // console.log("Uppercase was Clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleOnChange = (event)=>{  

        // console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
      <h1>{props.heading} </h1>

      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div> 
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lower Case</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes To Read  </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
