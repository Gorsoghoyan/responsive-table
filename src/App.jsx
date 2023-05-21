import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Table from "./pages/Table/Table";
import BinaryTree from "./pages/BinaryTree/BinaryTree";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Table />} />
        <Route path="binary-tree" element={<BinaryTree />} />
      </Routes>
    </BrowserRouter>
  );
}