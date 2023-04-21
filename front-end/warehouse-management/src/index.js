import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Administrator from "./pages/Administrator";
import Manager from "./pages/Manager";
import Picker from "./pages/Picker";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Administrator />} />
          <Route path="Manager" element={<Manager/>} />
          <Route path="Picker" element={<Picker />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);