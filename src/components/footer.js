import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterItemSocial,
  FooterLink,
  FooterSecction,
} from "./elements/footer.elements";

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterSecction>
          <StaticImage
            imgClassName="logo"
            alt="Logo de la pagina"
            src="../images/logo.png"
            width={150}
          />
          <p>
            Giannella, es una joven de 16 años, nacida en Valencia Venezuela,
            desde niña le ha gustado el mundo de las artes, desarrollando la
            pintura, el dibujo, esculpe en plastilina, diseña, escribe cuentos,
            es emprendedora, creo su propia marca de diseños exclusivos
            ArteGiann y también es creadora digital de NFTs.
          </p>
          <p>
            <br />© {new Date().getFullYear()} &middot;
            {` `}
            <FooterLink to="/">ArteGiann</FooterLink>
          </p>
        </FooterSecction>
        <FooterSecction>
          <h4>Recursos</h4>
          <FooterLink to="/blog">Blog</FooterLink>
          <br />
          <FooterLink to="/discover">Descubrir</FooterLink>
        </FooterSecction>
        <FooterSecction>
          <h4>Artista</h4>
          <FooterLink to="/about-me">Sobre MI</FooterLink>
          <br />
          <FooterLink to="/contact">Contactame</FooterLink>
        </FooterSecction>
        <FooterSecction>
          <h4>Contácto</h4>
          <p>
            Puedes seguirme en <br />
            mis redes sociales
          </p>
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
        </FooterSecction>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
