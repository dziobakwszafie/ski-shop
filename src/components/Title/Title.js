import React from "react";
import styled from "styled-components";

const Styles = styled.text`
  h2 {
    font-family: "Abril Fatface", cursive;
    font-size: 50px;
    padding: 10px 0;
    margin-top: 20px;
  }
`;

const Title = () => {
  return (
    <Styles id="skis">
      <h2 class="skis-heading text-center">Narty</h2>
    </Styles>
  );
};

export default Title;
