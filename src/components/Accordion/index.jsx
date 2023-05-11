import React, { useState } from "react";
import "./style.css";
function Accordion({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  const handlClick = () => setIsOpen(!isOpen);

  return (
    <div className="accordion">
      <h2 onClick={handlClick}>{title}</h2>
      {isOpen ? <p>{desc}</p> : null}
    </div>
  );
}

export default Accordion;
