
import React, { useState} from 'react';


export default function Textform(props) {


  const [text, setText] = useState("");
 
// count the words and filter function to remove space and dont count it then length counts final filtered words

let count = text.split(" ").filter(word => word !== "").length;

  const handleUPclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert(" Coneverted to Upper case", "success")
  };

  const handleLOWclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert(" Coneverted to Lower case", "success")
  };

  const handletrim = () => 
  {
    let newtext = text.trim() ; 
    setText(newtext) ; 
    props.showalert(" White Space Removed ","success")
  }

  const copytoclip = () => 
  {
    navigator.clipboard.writeText(text).then(function() {
      props.showalert('Text copied to clipboard  ' , 'success');
  }).catch(function(err) {
      console.error('Unable to copy text to clipboard', err);
  });
  }


const handlebold = () =>
{
  document.querySelector("#mybox").style.fontWeight='bold' 
}
  const handdleclear = () => 
  {
    document.querySelector("#mybox").value="" ; 
     setText("");
  }


  const handleshare = () => 
  {
    navigator.share({
      title : "Share Using TextMagics" , 
      text :  text , 
    })
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

 

  return (
    <>
      <div className="container my-3">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3 my-5">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
        </div>

        <div>
          <button className="btn btn-primary mx-3 my-3" onClick={handleUPclick}>
            Convert to UPPER Case
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={handleLOWclick}>
            Convert to LOWER Case
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={handdleclear}>
            Clear Text       
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={handletrim}>
            Trim Text       
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={handlebold}>
            Bold Text       
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={copytoclip}>
           Copy Text       
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={handleshare}>
           Share Result      
          </button>
        </div>
      </div>


      <div className="container my-5">

        <h2> Your Text Summary </h2>
        <p> {count} Words , {text.length}  Characters </p>

        <p> {0.008 * text.split(" ").length} Minutes to read
        </p>

        <h2> Preview </h2>
        <p>{text.length > 0 ? text : " Enter something in textbox above to preview "}</p>


      </div>
    </>
  );
}
