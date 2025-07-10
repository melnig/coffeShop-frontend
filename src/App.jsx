import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import Wholesale from "./pages/WholeSale";

import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/wholesale" element={<Wholesale />} />
      </Routes>
    </>
  );
}

export default App;
