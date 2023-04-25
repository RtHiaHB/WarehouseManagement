import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
            <Link to="/">Home</Link>
          
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;