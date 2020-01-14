import React, { PureComponent } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.text`
  h2 {
    border-bottom: solid 2px darkgrey;
  }
`;

class Title extends PureComponent {
  render() {
    return (
      <Styles>
        <h2 class="skis-heading text-center" id="skis">
          Narty
        </h2>
      </Styles>
    );
  }
}

export default Title;
