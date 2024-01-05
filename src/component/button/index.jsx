import React from "react";
import styled from "styled-components";

const Stylebtn = styled.button`
  border: none;
  padding: 10px 20px;
  text-align: center;

  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  color: #8a8ae7;

  &:hover {
    background-color: #8080ca;
    color: white;
  }
`;

const Button = ({ buttonName, buttonClick }) => {
  return (
    <Stylebtn  onClick={buttonClick}>{buttonName}</Stylebtn>
  );
};



export default Button;
