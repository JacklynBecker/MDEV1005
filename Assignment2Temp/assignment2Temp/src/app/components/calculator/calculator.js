
import React, { useState } from 'react';
import './calculator.css';

//calculator widget
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  //handle calculation and display result
  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput('');
      } catch (error) {
        setResult('Math Error');
        setInput('');
      }
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <h2 className="calculator-header">Calculator</h2>
      <div className="screen">
        <input type="text" readOnly value={input} placeholder="0" />
        <input type="text" readOnly value={result} placeholder="Result" />
      </div>
      <div className="button-row">
        {['7', '8', '9', '/'].map((item) => (
          <button className="button-calc" key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button className="button-calc" key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button className="button-calc" key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button className="button-calc" onClick={() => handleClick('0')}>0</button>
        <button className="button-calc" onClick={() => handleClick('+')}>+</button>
        <button className="equals" onClick={() => handleClick('=')}>=</button>
        <button className="clear" onClick={() => handleClick('Clear')}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;