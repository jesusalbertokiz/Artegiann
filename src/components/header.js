import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaFacebook, FaInstagram, FaTwitter, FaBars } from "react-icons/fa";
import {
  NavbarContainer,
  NavbarWrapper,
  NavIconsMobile,
  NavItemSocial,
  NavLogo,
  NavMenu,
  NavMenuItem,
  NavMenuItemLink,
} from "./elements/header.elements";

const Header = () => {
  const [click, setClick] = React.useState(false);
  const changeClick = () => {
    setClick(!click);
  };
  function active() {
    let active = window.location.pathname;
    return active;
  }
  return (
    <header>
      <NavbarContainer click={click}>
        <NavbarWrapper>
          <NavLogo>
            <Link to="/">
              <StaticImage
                imgClassName="logo"
                alt="Logo de la pagina"
                src="../images/logo.png"
                width={155}
              />
            </Link>
            <NavIconsMobile
              onClick={() => {
                changeClick();
              }}
            >
              <FaBars />
            </NavIconsMobile>
          </NavLogo>
          <NavMenu>
            <NavMenuItem>
              <NavMenuItemLink
                className={active() === "/" ? "active" : ""}
                to="/"
              >
                INICIO
              </NavMenuItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemLink
                className={active() === "/discover" ? "active" : ""}
                to="/discover"
              >
                DESCUBRE
              </NavMenuItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemLink
                className={active() === "/blog" ? "active" : ""}
                to="/blog"
              >
                BLOG
              </NavMenuItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemLink
                className={active() === "/about-me" ? "active" : ""}
                to="/about-me"
              >
                SOBRE MI
              </NavMenuItemLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemLink
                className={active() === "/contact" ? "active" : ""}
                to="/contact"
              >
                CONTACTO
              </NavMenuItemLink>
            </NavMenuItem>
          </NavMenu>
          <NavItemSocial>
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
          </NavItemSocial>
        </NavbarWrapper>
      </NavbarContainer>
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
