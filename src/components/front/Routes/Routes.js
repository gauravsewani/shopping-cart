import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import SignUp from "../SignUp/SignUp";

const Routes = ({ productItems }) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products productItems={productItems} />
        </Route>
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
