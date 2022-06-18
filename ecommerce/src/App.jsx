import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  const user = true
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path="/products/:category">
        <ProductList/>
      </Route>
      <Route path="/product/:id">
        <Product/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
      <Route path="/login">
        {user ? <Redirect to="/"/> : <Login/>}
      </Route>
      <Route path="/register">
      {user ? <Redirect to="/"/> : <Register/>}
      </Route>
    </Switch>
  </Router>
  )

  //return <Cart/>
  //return <Product/>;
  //return <ProductList/>;
  //return <HomePage/>;
  //return <Register/>;
  //return <Login/>;
};

export default App;