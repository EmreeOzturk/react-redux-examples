import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Products />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}
