import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./src/app";

import {
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  Hits,
} from "searchkit";
import Home from "./src/components/Home";

const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies/");
// const searchkit = new SearchkitManager("/");

ReactDOM.render(
  <SearchkitProvider searchkit={searchkit}>
    <div>
      <App />
    </div>
  </SearchkitProvider>,
  document.getElementById("app")
);
