import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.94);
  color: #fff;
  padding: 3em 1em;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const FooterTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 0.8em;
  color: #fff;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.3em;
`;

export const FooterLink = styled(Link)`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 0.4em 0;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const FooterInfoText = styled.p`
  font-size: 0.9em;
  color: #ccc;
  margin: 0.3em 0;
  line-height: 1.5;
`;
