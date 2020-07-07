import React from "react"

const style ={
    background: "lightblue",
    border: "2px double brown",
    borderRadius: "5px",
    fontSize: "30px",
    fontWeight: "400",
    cursor: "pointer",
    outline: "none"
}

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);
export default Square;