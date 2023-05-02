import { Outlet, Link } from "react-router-dom";
import "../App.css"
const Layout = () => {
  return (
    <>
      <nav  class="Layout">
        
            <Link to="/">Home</Link>{' '}
            <Link to="/AddInventory"> Add Inventory</Link>{' '}
            <Link to="/EditInventory"> Edit Inventory</Link>{' '}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;