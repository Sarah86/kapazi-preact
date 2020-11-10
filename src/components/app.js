import { h, render, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";
import AsyncRoute from "preact-async-route";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Footer from "./footer";
import Thermodeck from "../routes/thermodeck";
import Softtech from "../routes/softtech";
import Vinilkap from "../routes/vinilkap";
import Nauticotrancado from "../routes/nauticotrancado";
import Nauticlean from "../routes/nauticlean";
import NotFound from "../routes/404";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <AsyncRoute
        path="/thermodeck"
        getComponent={() =>
          import("../routes/thermodeck").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/softtech"
        getComponent={() =>
          import("../routes/softtech").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/vinilkap"
        getComponent={() =>
          import("../routes/vinilkap").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/nauticotrancado"
        getComponent={() =>
          import("../routes/nauticotrancado").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/nauticlean"
        getComponent={() =>
          import("../routes/nauticlean").then((module) => module.default)
        }
      />
      <NotFound type="404" default />
    </Router>
    <Footer />
  </div>
);

export default App;
