import { Link } from "gatsby";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${({ click }) => (click ? "auto" : "80px")};

  overflow: ${({ click }) => (click ? "visible" : "hidden")};
  background-color: #330033;
  transition: height 3s ease-in-out;
`;

export const NavbarWrapper = styled.div`
  width: 90%;
  max-width: 1330px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const NavLogo = styled.div`
  position: relative;
  bottom: 2px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const NavIconsMobile = styled.div`
  display: none;
  @media (max-width: 770px) {
    position: relative;
    top: 6px;
    display: inline-block;
    color: #adb9c7;
    &:hover {
      color: #fff;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavMenuItem = styled.li`
  width: auto;
  heigth: 100%;
  padding: 1rem 0;
`;

export const NavMenuItemLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #adb9c7;
  &:hover {
    color: #fff;
    border-bottom: 0.07rem solid #ffff;
    transition: 0.2s ease-in;
  }
`;

export const NavItemSocial = styled.div`
  display: flex;
  gap: 0.6rem;
  color: #adb9c7;

  a {
    &:hover {
      color: #fff;
    }
  }
  @media (max-width: 770px) {
    padding-bottom: 3rem;
  }
`;
