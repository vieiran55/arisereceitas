import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import Receitas from "./Pages/Receitas";
import { IReceita } from "./interfaces/IReceita";

export default function AppRouter() {
  const [receitas, setReceitas] = useState<IReceita[]>([]);
  const [validaYtb, setValidaYtb] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/receitas"
          element={
            <Receitas
              receitas={receitas}
              setReceitas={setReceitas}
              validaYtb={validaYtb}
              setValidaYtb={setValidaYtb}
            />
          }
        />
      </Routes>
    </Router>
  );
}
