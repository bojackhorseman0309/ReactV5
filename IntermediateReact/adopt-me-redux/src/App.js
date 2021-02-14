import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/"></SearchParams>
          <Details path="/details/:id"></Details>
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
