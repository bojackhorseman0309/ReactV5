import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/react";
import colors from "./Colors";

const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

const NavBar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/"></Link>
      <span
        css={css`
          font-size: 60px;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite reverse;
          }
          display: inline-block;
          animation: 1s ${spin} linear infinite;
        `}
        aria-label="logo"
        role="img"
      >
        🦮
      </span>
    </header>
  );
};

export default NavBar;
