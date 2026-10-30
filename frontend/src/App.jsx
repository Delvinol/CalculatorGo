import React, { useState } from "react"
import './App.css'

function App() {
  const [input, setInput] = useState('0');

  const handleClick = async (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === '=') {// Extracts the numbers and operator from the expression

      const match = input.match(/^(-?\d+(?:\.\d+)?)([+\-x÷])(-?\d+(?:\.\d+)?)$/);
      if (!match) {
        setInput('Error');
        return;
      }

      const number1 = Number(match[1]);
      const operator = match[2];
      const number2 = Number(match[3]);

      // Maps calculator operators to backend operations
      const operations = {
        '+': 'addition',
        '-': 'reduction',
        'x': 'multiply',
        '÷': 'division'
      };

      try {
        // Sends the calculation request to the Go API
        const response = await fetch('/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            number1: number1,
            number2: number2,
            operacion: operations[operator]
          })
        });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        // Receives the result from the backend
        const data = await response.json();

        setInput(String(data.result));

      } catch (error) {
        console.error('API Error:', error);
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