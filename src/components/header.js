import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaAlignJustify,
} from "react-icons/fa";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav">
        <div className="flex-row">
          <div className="nav-brand">
            <Link to="/">
              <StaticImage
                imgClassName="logo"
                alt="Logo de la pagina"
                src="../images/logo.png"
                width={200}
              />
            </Link>
          </div>
          <div className="toggle-collapse d-none">
            <div className="toggle-icons">
              <FaAlignJustify />
            </div>
          </div>
          <div className="nav-menu-container">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/discover" className="">
                  Descubre
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-me" className="">
                  Sobre Mi
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="">
                  Contactame
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-item-social">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
