import React from "react";
import { Row, Col } from "react-flexa";
import { StyledLabelL, StyledLabelT } from "./style.css";

export function ErrorPage() {
  return (
    <Row justifyContent="center" alignItems="center" style={{ height: "100%" }}>
      <Col>
        <Row justifyContent="center">
          <StyledLabelL>404</StyledLabelL>
        </Row>
        <Row justifyContent="center">
          <StyledLabelT>Sorry, page not found</StyledLabelT>
        </Row>
      </Col>
    </Row>
  );
}
