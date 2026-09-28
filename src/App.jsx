import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Servizi from "./pages/Servizi";
import Contatti from "./pages/Contatti";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </Layout>
  );
}
