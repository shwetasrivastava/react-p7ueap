import React from "react";

const style = {
  background: "lightgreen",
  border: "2px solid darkblue",
  fontSize: "50px",
  fontWeight: "400",
  cursor: "pointer",
  outline: "none"
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
