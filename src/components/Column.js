import React, { useState } from "react";

const Column = () => {
  const [state, setState] = useState(0);
  const [width, setWidth] = useState(0);
  const [arr, setArr] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (state <= 12) {
      const colWitdh = Math.floor(100 / state);
      setWidth(colWitdh);
      setArr(Array.from({ length: state }).fill(0));
    } else {
      alert("Dont more 12 ");
    }
  };
  console.log(arr);

  const Test = () => {
    return (
      <div
        style={{ width: `${width}%`, border: "1px solid red", height: "100px" }}
      ></div>
    );
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            setState(e.target.value);
          }}
          type="number"
          min={1}
          max={99}
        />
        <button type="submit">Click here</button>
        {/* <p>{state}</p> */}
      </form>
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        {arr.map((item) => {
          return <Test />;
        })}
      </div>
    </>
  );
};

export default Column;
