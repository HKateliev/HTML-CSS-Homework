import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import "./styles/app.less";
import { GlobalStyle } from "./styles/app.css";
//import { Content } from "./components/Container/Content";
import { ErrorPage } from "./Error";
import { createRoot } from "react-dom/client";
import RegisterPage from "./Content/RegisterPage";
import LoginPage from "./Content/LoginPage";
import Home from "./Content/HomePage";
import NavigationBar from "./Content/NavBar";
import { Content } from "./Content/Content";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/not-found" component={ErrorPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/client" component={Content} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
