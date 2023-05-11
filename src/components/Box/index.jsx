import React from "react";
import style from "./box.module.css";

function Box(props) {
  console.log(props);
  return (
    <div
      className={style.box}
      style={
        props.black
          ? { background: "black" }
          : props.blue
          ? { backgroundColor: "blue" }
          : {}
      }
    >
      {props.hi}
    </div>
  );
}

export default Box;
