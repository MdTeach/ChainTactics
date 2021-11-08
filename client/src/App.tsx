import Web3Context from "web3/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

interface NavItems {
  path: string;
  component: () => JSX.Element;
  exact: boolean;
}

const nav: Array<NavItems> = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

function App() {
  return (
    <Web3Context.Provider value={{}}>
      <Router>
        <Switch>
          {nav.map((item, i) => (
            <Route
              path={item.path}
              exact={item.exact}
              key={i}
              component={item.component}
            />
          ))}
        </Switch>
      </Router>
    </Web3Context.Provider>
  );
}

export default App;
