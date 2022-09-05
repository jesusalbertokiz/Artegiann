import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 40% auto auto auto;
  grid-wrap: wrap;
  gap: 1rem;
  background-color: #330033;
`;

export const FooterSecction = styled.div`
  padding: 1rem;
`;

export const FooterImage = styled(StaticImage)`
  width: 150px;
`;

export const FooterLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-weight: 200;
  font-size: 70%;
  color: #adb9c7;
  &:hover {
    color: #fff;
  }
`;

export const FooterItemSocial = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  color: #adb9c7;
  padding-top: 1rem;

  a {
    &:hover {
      color: #fff;
    }
  }
`;
