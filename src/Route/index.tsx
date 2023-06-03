import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/HomePage";
import QuemSomos from "../pages/QuemSomos";
import Missao from "../pages/Missao";
import Contato from "../pages/Contato";
const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/missao" element={<Missao />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  );
};

export default RouterMain;
