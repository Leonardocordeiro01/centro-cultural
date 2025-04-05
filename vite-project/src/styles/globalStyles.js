import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

p {
    font-size: 20px;
}

h1 {
    font-size: 50px;
}

h2 {
    font-size: 40px;
}`;

export default myGlobalStyles;
