import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Title></Title>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;