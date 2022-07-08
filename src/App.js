// import "./App.css";

// import React, { Component } from "react";
// import NavBar from "./components/Navbar";
// import News from "./components/News";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  render() {
    return (
      // <div>
      //   <Router>
      //     <NavBar />

      //     <Switch>
      //       <Route path="/about">
      //         <About />
      //       </Route>
      //     </Switch>
      //     <News pageSize={5} country="in" category="sports" />
      //   </Router>
      // </div>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key="Home" pageSize={6} country="in" category="general" />
              }
            />{" "}
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />{" "}
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              }
            />{" "}
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            />{" "}
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              }
            />{" "}
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              }
            />{" "}
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            />{" "}
          </Routes>{" "}
        </BrowserRouter>{" "}
      </div>
    );
  }
}
