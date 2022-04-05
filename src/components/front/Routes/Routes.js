import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import SignUp from "../SignUp/SignUp";
import Cart from "../Cart/Cart";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearence,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
        <Route path="/Cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearence={handleCartClearence}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
