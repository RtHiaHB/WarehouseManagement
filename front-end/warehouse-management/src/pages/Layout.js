import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Administrator</Link>
          </li>
          <li>
            <Link to="/manager">Manager</Link>
          </li>
          <li>
            <Link to="/picker">Picker</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;