import React, { useState } from "react";
import "../caculator/index.css"


const Display = ({ value }) => <div className="display">{value}</div>;


const Button = ({ buttonName, buttonClick }) => (
  <button onClick={buttonClick}>{buttonName}</button>
);

const Calculator = () => {
  const [value, setValue] = useState("");

  const buttonClick = (buttonName) => {
    if (buttonName === "AC") {
      setValue("");
    } else if (buttonName === "=") {
      try {
        setValue(eval(value));
      } catch (error) {
        setValue("Error");
      }
    } else {
      setValue(value + buttonName);
    }
  };

  return (
    <div className="calculator">
      <Display value={value} />
      <div className="button-row">
        <Button buttonName="+" buttonClick={() => buttonClick("+")} />
        <Button buttonName="-" buttonClick={() => buttonClick("-")} />
        <Button buttonName="*" buttonClick={() => buttonClick("*")} />
        <Button buttonName="/" buttonClick={() => buttonClick("/")} />
      </div>
      <div className="button-row">
        <Button buttonName="7" buttonClick={() => buttonClick("7")} />
        <Button buttonName="8" buttonClick={() => buttonClick("8")} />
        <Button buttonName="9" buttonClick={() => buttonClick("9")} />
      </div>
      <div className="button-row">
        <Button buttonName="4" buttonClick={() => buttonClick("4")} />
        <Button buttonName="5" buttonClick={() => buttonClick("5")} />
        <Button buttonName="6" buttonClick={() => buttonClick("6")} />
      </div>
      <div className="button-row">
        <Button buttonName="1" buttonClick={() => buttonClick("1")} />
        <Button buttonName="2" buttonClick={() => buttonClick("2")} />
        <Button buttonName="3" buttonClick={() => buttonClick("3")} />
      </div>
      <div className="button-row">
        <Button buttonName="0" buttonClick={() => buttonClick("0")} />
        <Button buttonName="." buttonClick={() => buttonClick(".")} />
        <Button buttonName="AC" buttonClick={() => buttonClick("AC")} />
        <Button buttonName="=" buttonClick={() => buttonClick("=")} />
      </div>
    </div>
  );
};

export default Calculator;
