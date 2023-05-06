import { Outlet, Link } from "react-router-dom";
import "../App.css"
const Layout = () => {
  return (
    <>
      <nav  className="Layout">
        
            <Link to="/">Home</Link>{' '}
            <Link to="/AddInventory"> Add Inventory</Link>{' '}
            <Link to="/EditInventory"> Edit Inventory</Link>{' '}
            <Link to="/InvByProd">Inv By Prod</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;