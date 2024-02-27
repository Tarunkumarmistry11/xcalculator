import React, { useState } from 'react'
import './calc.css';

function Calc() {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleClick = (value) => {
               if(value === "=") {
                try{
                    const result = eval(input);
                    setOutput(result.toString())
                } catch(error) {
                    setOutput('Error')
                }
               } else if(value === "C") {
                setInput("")
                setOutput("")
               } else {
                setInput(input + value)
               }
    }
  return (
    
    <div className='calc'>
        <h1>React Calculator</h1>
       <input type="text" value={input} readOnly inputMode='numeric' />
        <div className='output'>{output}</div>
         <div className='buttons'>
            {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/' ].map((item, index) => (
                <button key={index} onClick={() => handleClick(item)}>
                    {item}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Calc