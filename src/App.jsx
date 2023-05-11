import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Navabar from "./components/Navbar";
import Box from "./components/Box";
import Accordion from "./components/Accordion";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

// array of object

function App() {
  const [isHome, setIsHome] = useState(false);

  return (
    <div>
      {isHome ? <HomePage /> : <SearchPage />}

      {/* <Button />
      <Box hello hi={"box 4"} black />
      <Navabar />
      <div className="box"> box 1</div>

      <Box hello hi={"box 3"} />

      <Box blue hi={"box blue"} /> */}
    </div>
  );
}

export default App;
