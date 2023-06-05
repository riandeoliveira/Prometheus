import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
	  border: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
    font-size: 16px;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    background: linear-gradient(-45deg, ${theme.colors.complementary});
    background-size: 400% 400%;
    height: 100vh;

    ${theme.animations.gradient}
  }
`;
