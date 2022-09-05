import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  FooterMenu,
  FooterCopy,
  FooterItemSocial,
  FooterLink,
} from "./elements/footer.elements";

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterContent>
          <StaticImage
            imgClassName="logo"
            alt="Logo de la pagina"
            src="../images/logo.png"
            width={150}
          />
          <span className="footer-info">111 111 111</span>
          <span className="footer-info">academy@itskrey.com</span>
        </FooterContent>
        <FooterMenu>
          <FooterContent>
            <h4>Recursos</h4>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/discover">Descubrir</FooterLink>
          </FooterContent>
          <FooterContent>
            <h4>Artista</h4>
            <FooterLink to="/about-me">Sobre MI</FooterLink>
            <FooterLink to="/contact">Contactame</FooterLink>
          </FooterContent>
        </FooterMenu>
        <FooterContent className="footer-content">
          <h4>Contácto</h4>
          <FooterItemSocial>
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
          </FooterItemSocial>
        </FooterContent>
      </FooterContainer>
      <FooterCopy>
        <span className="copyright">
          © {new Date().getFullYear()} &middot;
          {` `}
          <FooterLink to="/">ArteGiann</FooterLink>
        </span>
      </FooterCopy>
    </footer>
  );
};

export default Footer;
