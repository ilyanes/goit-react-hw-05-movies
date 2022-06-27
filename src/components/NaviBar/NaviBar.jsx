import { NavLink } from "react-router-dom";
export default function NaviBar() {
  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        Home
      </NavLink>
      <NavLink to="/movies" style={{ textDecoration: "none" }}>
        Movies
      </NavLink>
    </div>
  );
}
