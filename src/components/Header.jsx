import { Link, NavLink, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <header className="sma-header">
      <div className="sma-header-brand">
        <span className="sma-header-logo">(^ _ ^)</span>
        <span className="sma-header-title">STUDENT MANAGEMENT SYSTEM</span>
      </div>
      <nav className="sma-header-nav">
        <NavLink
          to="/students"
          className={({ isActive }) =>
            isActive
              ? "sma-header-nav-item sma-nav-active"
              : "sma-header-nav-item"
          }
        >
          Students
        </NavLink>
        <Link to="/ai" className="sma-nav-link">
          AI ASSISTANT
        </Link>
        <button className="sma-btn-logout" onClick={handleLogout}>
          Signout
        </button>
      </nav>
    </header>
  );
}
