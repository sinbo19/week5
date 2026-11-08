import { NavLink } from "react-router-dom";

function Navbar({ message }) {
  return (
    <nav aria-label="Main navigation">
      

      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) =>
            isActive ? "active-link" : ""
          }>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/form" className={({ isActive }) =>
            isActive ? "active-link" : ""
          }>
            Form
          </NavLink>
        </li>

        <li>
          <NavLink to="/thank-you" className={({ isActive }) =>
            isActive ? "active-link" : ""
          }>
            Thank You
          </NavLink>
        </li>

        <li>
          <NavLink to="/items/1" className={({ isActive }) =>
            isActive ? "active-link" : ""
          }>
            Item Details
          </NavLink>
        </li>
      </ul>
      {message && (
          <p role="status" aria-live="polite">
              {message}
          </p>
      )}
    </nav>
  );
}

export default Navbar;   
