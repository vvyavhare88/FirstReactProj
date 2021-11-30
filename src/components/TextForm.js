import React, {useState} from 'react'



export default function TextForm(props) {

 const handleUpClick=()=>{
    // console.log("Uppercase was click"+ text);
     let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to uppercase!", "success");
 }
 const handleLoClick=()=>{
    // console.log("Uppercase was click"+ text);
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to lowercase!", "success");
 }
 const handleClearClick=()=>{
    // console.log("Uppercase was click"+ text);
     let newText='';
     setText(newText)
     props.showAlert("Text cleared!", "success");
 }
 const handleCopyClick=()=>{
    // console.log("Uppercase was click"+ text);
   // console.log("am copying text");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!", "success");
 }
 

 const handleOnChanged=(event)=>{
    //console.log("on changed");
    setText(event.target.value);
}
const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
    props.showAlert("Capital first letter!", "success");

}

const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extra spaces!", "success");

}

 
    const[text, setText] = useState('');
   // text="new text";//wrong way to change the state
    //setText("new text");//correct way to change the state
    return (
        <>
        <div className="container"style={{color: props.mode === 'light'?'black':'white'}}>
    
            <h1>{props.heading} </h1> 
        
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChanged} style={{backgroundColor: props.mode === 'light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleClearClick}>clear text</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleCopyClick}>copy text</button>
            <button className="btn btn-outline-primary mx-2" onClick={capitalFirstLetter}>capitalFirstLetter</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>



        </div>
        <div className="container my-3"style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>your text summery</h3>
            <p>{text.split(" ").length} words and and {text.length} charecters</p>
            <p>{0.008 * text.split(" ").length}minutes read</p>
            <h2>perview</h2>
            <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>


        </div>
        </>
    )
}
