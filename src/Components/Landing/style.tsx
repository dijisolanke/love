import styled from "styled-components";

interface LandingProps {
  image: string;
}

export default styled.section<LandingProps>`
  position: absolute;
  height: 100vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: contain; */
  top: 0;
  left: 0;
  /* background-position-y: -319px; */
  background-position: center;
  width: 100vw;
  /* overflow: hidden; */
  z-index: -1;

  h1 {
    font-family: "Tiempos Headline", serif;
    font-size: 58px;
    color: #fffefd;
    margin-top: 70vh;
    margin-left: 3vw;
    font-weight: 600;
    letter-spacing: 0.005em;
  }
  h1:after {
    position: relative;
    content: "TM";
    font-size: 15px;
    bottom: 27px;
  }
`;
