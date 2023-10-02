import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import Receitas from "./Pages/Receitas";
import { IReceita } from "./interfaces/IReceita";

export default function AppRouter() {
  const [receitas, setReceitas] = useState<IReceita[]>([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Receitas receitas={receitas} setReceitas={setReceitas}/>} />
      </Routes>
    </Router>
  );
}
