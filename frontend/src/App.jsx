import React, { useState } from "react"
import './App.css'

function App() {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === '=') {
      try {
        // Evaluates the mathematical expression
        const result = eval(input.replace('x', '*'), replace('÷', '/'));
        setInput(result.toString());
      } catch (e) {
        setInput('Error');
      }
    } else if (value === '+-') {
      // Changes the number sign
      if (input !== '0' && !isNaN(input)) {
        setInput((parseFloat(input) * -1).toString());
      }
    } else {
      // Updates the calculator input
      if (input === '0' || input === 'Error') {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  //Buttons we are going to  use
  const buttons = [
    'C', '+-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button key={index}
              className={
                btn === '='
                  ? 'equals'
                  : btn === 'C'
                    ? 'clear'
                    : ['+', '-', 'x', '÷', '%'].includes(btn)
                      ? 'operator'
                      : ''
              }
              onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;