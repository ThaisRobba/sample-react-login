// import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.color || "#ffffff"};
`;

export default Background;