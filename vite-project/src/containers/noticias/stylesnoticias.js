import styled from "styled-components";
import centro from "./image.png";



export const NoticiasFacebook = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${centro});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(4.5px);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  .fb-container {

  }

  .fb-page {
    width: 100% !important;
  }

  iframe {
    width: 100% !important;
  }
`;