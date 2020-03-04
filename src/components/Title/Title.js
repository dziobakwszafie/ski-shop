import React, { PureComponent } from "react";
import styled from "styled-components";

const Styles = styled.text`
  h2 {
    font-family: "Abril Fatface", cursive;
    font-size: 50px;
    padding: 10px 0;
    margin-top: 20px;
  }
  a.anchor {
    display: block;
    position: relative;
    top: -215px;
    visibility: hidden;
  }
`;

class Title extends PureComponent {
  render() {
    return (
      <Styles>
        <h2 class="skis-heading text-center">Narty</h2>
        <a class="anchor" id="skis"></a>
      </Styles>
    );
  }
}

export default Title;
