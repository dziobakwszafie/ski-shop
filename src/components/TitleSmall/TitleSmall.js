import React, { PureComponent } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.text``;

class TitleSmall extends PureComponent {
  render() {
    return (
      <Styles>
        <h4 class="skis-heading text-center" id="skis">
          sortuj według
        </h4>
      </Styles>
    );
  }
}

export default TitleSmall;
