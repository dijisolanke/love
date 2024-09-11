import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-top: 2vh;
`;

const NavItem = styled.div<{ isActive: boolean; isHovered: boolean }>`
  color: white;
  position: relative;
  cursor: pointer;
  font-size: 15px;
  padding: 0.75rem;

  &:not(:first-child) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2px;
    width: ${({ isActive, isHovered }) =>
      isActive || isHovered ? "6px" : "0"};
    height: ${({ isActive, isHovered }) =>
      isActive || isHovered ? "6px" : "0"};
    background-color: ${({ isActive, isHovered }) =>
      isActive || isHovered ? "white" : "transparent"};
    border-radius: 50%;
    transition: width 0.3s, height 0.3s, background-color 0.3s;
  }
  .logo {
    margin-top: 15vh;
  }
`;

const LogoContainer = styled.div`
  position: fixed;
  width: 100vw; /* Full width to allow centering */
  display: flex;
  justify-content: center; /* Horizontally center */
  top: 1.4vh; /* Vertical position as needed */

  a {
    font-size: 38px;
    font-weight: 500;
    font-family: "Oceanwide";
    src: url("../../fonts/Oceanwide.otf") format("truetype");
    color: white;
  }
`;

export { NavContainer, NavItem, LogoContainer };
