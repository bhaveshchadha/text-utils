import React,{useState} from 'react'

export default function Textarea(props) {
  
    const [text,setText]=useState('')

    const handleCopyClick=()=>{
      navigator.clipboard.writeText(text);
    }

    const handleStateChange=(event)=>{
        setText(event.target.value);
    }
     const handleCapitalizeClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        console.log('Clicked upper case button')
   
    }
    const handleLowerCaseClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      console.log('Clicked lower case button')
      
  }
  const handleClearTextClick=()=>{
    let newText='';
    setText(newText);
    console.log('Clicked lower case button')
    
}
  // console.log(text.split(' '));
  // console.log(text.split(' ').length);
  var s;
  let myArray=text.split(' ')
console.log((myArray))
 
// console.log(myArray.splice (myArray.indexOf(' '), 2));
s=`${ text.split(' ').length} words`

  return (

    <div style={{backgroundColor:props.mode==='light'?'white':'#042743'}}>
      {/* {f}; */}
      <div className="mb-10">
  <label htmlFor="exampleFormControlTextarea1" className="form-label my-3" ><h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1></label>
  <textarea /*style={{backgroundColor:props.mode==='light'?'white':'#042743'}}*/ className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleStateChange} value={text}  ></textarea>
  <button className="btn btn-primary my-2 mx-3" onClick={handleCapitalizeClick}>Click Here to Capitalize</button>
  <button className="btn btn-primary my-2 mx-3" onClick={handleLowerCaseClick}>Covert to lower case</button>
  <button className="btn btn-primary my-2 mx-3" onClick={handleClearTextClick}>Clear Text</button>
  <button className="btn btn-primary my-2 mx-3" onClick={handleCopyClick}>Copy Text</button>


</div>
<div className="container" style={{backgroundColor:props.mode==='light'?'white':'#042743', color:props.mode==='light'?'black':'white'}}>
 <h3>Your Text Summary</h3>
{/* {/* {
  text===""?<p>0 words</p>:<p>{ text.split(' ').length} words and {text.length} letters </p>
} */}
<p>{ text.split(' ').filter((element)=>{
  return element.length!==0
}).length} words and {text.length} letters </p>
 <p>{(text.split(' ').length*0.8).toFixed(2)} Minutes read</p>
</div>
<div className="container" style={{backgroundColor:props.mode==='light'?'white':'#042743', color:props.mode==='light'?'black':'white'}}>
  <h3>Preview:</h3>
  <p>{text===""?"Enter your text here":text}</p>
</div>
    </div>
  )
  
}
