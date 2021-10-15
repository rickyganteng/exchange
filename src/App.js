import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Main from "./pages/main/landing/landing"
import AddLiq from "./pages/main/addLiq/addLiq"
import Liq from "./pages/main/liquidity/liquidity"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/addliq" exact component={AddLiq} />
            <Route path="/liq" exact component={Liq} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
