import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const FooterContainer = styled.div`
  height: fit-content;
  width: 100%;
  padding: 3rem 6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
    border-bottom: 1px solid #adb9c7;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const FooterCopy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #adb9c7;
`;

// export const FooterSecction = styled.div`
//   padding: 1rem;
// `;

export const FooterImage = styled(StaticImage)`
  width: 150px;
  margin-bottom: 1.2rem;
`;

export const FooterLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-weight: 200;
  color: #adb9c7;
  &:hover {
    color: #fff;
  }
`;

export const FooterItemSocial = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #adb9c7;
  padding-top: 1rem;

  a {
    &:hover {
      color: #fff;
    }
  }
`;
