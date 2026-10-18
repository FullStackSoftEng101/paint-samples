import { NavLink } from "react-router";
// import { usePage } from "./PageContext";

/** Site navigation links */
export default function Navbar() {
  // const { page, setPage } = usePage();
  return (
    <header>
      <p>Paint Samples</p>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/colors"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Colors
        </NavLink>
        {/* <a
          className={page === "home" ? "active" : ""}
          onClick={() => {
            setPage("home");
          }}
        >
          Home
        </a>
        <a
          className={page === "colors" ? "active" : ""}
          onClick={() => {
            setPage("colors");
          }}
        >
          Colors
        </a> */}
      </nav>
    </header>
  );
}
