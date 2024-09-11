"use client";

import React, { useState } from "react";
import { NavContainer, NavItem, LogoContainer } from "./style";

const navItems = ["Mission", "Careers", "Labs"];

const Nav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      <NavContainer>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            isActive={index === activeIndex && hoverIndex === null}
            isHovered={index === hoverIndex && hoverIndex !== activeIndex}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item}
          </NavItem>
        ))}
      </NavContainer>
      <LogoContainer>
        <a>LoveMatch</a>
      </LogoContainer>
    </>
  );
};

export default Nav;
