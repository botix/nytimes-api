import React from "react";
import store, { history } from "./redux/store";
import { Provider } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import HardcoverFiction from "./pages/HardcoverFiction";
import Automotive from "./pages/Automotive";
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";
import Science from "./pages/Science";
import Politics from "./pages/Politics";

import { navSettings } from "./config/responsiveNavigationSettings";


export default function App(){
 
  
  return(
    <Provider store={store}>
      <ConnectedRouter history={history} >
        <ResponsiveNavigation 
          navLinks={navSettings.navLinks}
          logo={navSettings.logo}
          background={navSettings.background}
          hoverBackground={navSettings.hoverBackground}
          linkColor={navSettings.linkColor}
        />
        <Route exact path="/">
          {<Redirect to="/science" />}
        </Route>
        <Route  path="/science"             component={Science}           />
        <Route  path="/automotive"          component={Automotive}        />
        <Route  path="/politics"            component={Politics}          />
        <Route  path="/hardcoverfiction"    component={HardcoverFiction}  />

      </ConnectedRouter>
    </Provider>
  );
};