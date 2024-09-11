import React from "react";
import Root from "./style";

import image from "./../../../public/Images/background.jpg";

const imageUrl = image.src;

export default function Landing() {
  return (
    <Root image={imageUrl}>
      <h1>
        The dating app <br /> designed to for connection
      </h1>
    </Root>
  );
}
