import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header({ email, signOut, loggedIn }) {
  const location = useLocation();
  const path = location.pathname === "/sign-in" ? "/sign-up" : "/sign-in";
  const LinkName = location.pathname === "/sign-in" ? "Регистрация" : "Войти";

  return (
    <header className="header">
      <img src={logo} alt="логотип Место" className="header__logo" />
      {loggedIn ? (
        <div className="header__wrap">
          <p className="header__email">{email}</p>
          <Link className="header__link" to="/sign-in" onClick={signOut}>
            Выйти
          </Link>
        </div>
      ) : (
        <Link className="header__link" to={path}>
          {LinkName}
        </Link>
      )}
    </header>
  );
}
