import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase Clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to UpperCase","success");
    }
    const handleLoClick = () =>{
        console.log("UpperCase Clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to LowerCase","success");
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
    }
    const handlePrintClick = () =>{
        let newText = window.print();
        setText(newText)
    }
    const handlecopy = () =>{
        let newText = document.getElementById('mybox');
        newText.select();
        navigator.clipboard.writeText(newText)
    }
    const handleextraspaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }

    const handleChange = (event) =>{
        console.log("Handle Changed")
        //When we try to change in text then only handlechange function will run but value will not change
        //So to make value change we use event.target.value
        setText(event.target.value)  
    }
    
    //State Var   updateVar  using State
    const [text, setText] = useState("Enter the Text")
    //text = "kfsfskfos";  //Wrong way to update text
    //setText = ('hsdbfjsf')   //Correct way to update text
    return (
        <> 
            <div className='container' style={{color:props.mode==='dark' ? 'white':'dark'}}>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
                    color:props.mode==='dark' ? 'white':'dark'}} id="mybox" rows="10"></textarea>
                </div>
                    <div className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</div>
                    <div className="btn btn-success mx-1" onClick={handleLoClick}>Convert to LowerCase</div>
                    <div className="btn btn-danger mx-1" onClick={handleClearClick}>Clear text</div>
                    <div className="btn btn-danger mx-1" onClick={handlePrintClick}>Print Text</div>
                    <div className="btn btn-danger mx-1" onClick={handlecopy}>Copy Text</div>
                    <div className="btn btn-warning mx-1" onClick={handleextraspaces}>Removes Extra Spaces</div>

            </div>
            <div className='container my-4'style={{color:props.mode==='dark' ? 'white':'dark'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text :'Enter the Text to Preview the '}</p>
            </div>
        </>
 
 )
    
}

export default TextForm