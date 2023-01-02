import React, { useRef, useContext } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";

export default function Header({ userType }) {
  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/cars",
      display: "Cars",
    },
    userType === "admin"
      ? {
          path: "/admin",
          display: "Admin",
        }
      : {
          path: "",
          display: "",
        },
  ];

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={navClass =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
