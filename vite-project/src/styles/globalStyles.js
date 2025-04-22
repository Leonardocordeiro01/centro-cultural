import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

body {
    background: #f5f5f5;
}

p {
    font-size: 1rem;
}

h1 {
    font-size: 3rem;
    color: #212121;
}

h2 {
    font-size: 2.5rem;
}`;

export default myGlobalStyles;
