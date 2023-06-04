import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BinaryTree from "./pages/BinaryTree/BinaryTree";
import ResponsiveTable from "./pages/ResponsiveTable/ResponsiveTable";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<ResponsiveTable />} />
        <Route path="binary-tree" element={<BinaryTree />} />
      </Routes>
    </BrowserRouter>
  );
}