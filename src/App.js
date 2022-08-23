import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import Home from "./components/Home";
import singleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Title></Title>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic/:article_id" element={<singleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
