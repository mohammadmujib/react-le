import React, { useRef, useState } from "react";

function HomePage() {
  const first = useRef(null);
  // console.log(first);

  // console.log(first.current);
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const lastName = useRef(null);

  const [arr, setArr] = useState(["todo1", "todo2"]);
  const handleClick = () => {
    setArr([...arr, firstName]);
    setFirstName("");
  };

  return (
    <div>
      <h1>HomePage</h1>
      {arr.map((el) => (
        <h2>{el}</h2>
      ))}
      <button onClick={handleClick}>Add Todo</button>
      <p ref={first}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est
        consectetur eum vel explicabo omnis quo, impedit ea molestiae suscipit
        ullam. Quam aliquam nostrum harum excepturi. Sint nisi suscipit
        accusamus?
      </p>

      <form>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        {firstName}
        {/* <input
          type="text"
          ref={lastName}
          onChange={(e) => console.log(e.target.value)}
        />
        {lastName.current ? lastName.current : "no value"} */}
        {/* {lastName} */}
      </form>
    </div>
  );
}

export default HomePage;
