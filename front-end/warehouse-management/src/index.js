import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Administrator from "./pages/Administrator";
import Manager from "./pages/Manager";
import Picker from "./pages/Picker";
import Home from "./pages/Home";
import CurrentUserProvider from "./contexts/CurrentUser";
import AddInventory from "./pages/AddInventory"
import EditInventory from "./pages/EditInventory"
import InvByProd from './pages/InvByProd'
import "./App.css";
export default function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="Administrator" element={<Administrator />} />
            <Route path="Manager" element={<Manager />} />
            <Route path="Picker" element={<Picker />} />
            <Route path="AddInventory" element={<AddInventory />} />
            <Route path="EditInventory" element={<EditInventory />} />
            <Route path="InvByProd" element={<InvByProd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);