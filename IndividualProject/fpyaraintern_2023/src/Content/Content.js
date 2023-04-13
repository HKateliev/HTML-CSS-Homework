import React from "react";
import { Row, Col } from "react-flexa";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavigationBar from "./NavBar";
import ProductForm from "./ProductEntry";
import WarehouseTable from "./Warehouses";

export const Content = () => {
  return (
    <BrowserRouter>
      <Row gutter="0px">
        <NavigationBar />
      </Row>
      <Row className="main" gutter="0px" justifyContent="center">
        <Switch>
          <Route path="/client/warehouses" component={WarehouseTable} />
          <Route path="/client/product-entry" component={ProductForm} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Row>
    </BrowserRouter>
  );
};
