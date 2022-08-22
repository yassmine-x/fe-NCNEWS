import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import Home from "./components/Home";
import Nav from "./components/Nav";
hello;
function App() {
  return (
    <BrowserRouter>
      <Title />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
