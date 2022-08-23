import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import Nav from "./components/Nav";
import Topics from "./components/Topics";

function App() {
  return (
    <BrowserRouter>
      <Title />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
