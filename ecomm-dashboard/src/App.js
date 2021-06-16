import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddProduct from "./Components/Product/AddProduct";
import ListProduct from "./Components/Product/ListProduct";
import UpdateProduct from "./Components/Product/UpdateProduct";
import Error from "./utils/Error";
import Protected from "./Components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} />
          <Route path="/addProduct">
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path="/updateProduct/:id">
            <Protected Cmp={UpdateProduct} />
          </Route>
          <Route path="/product">
            <Protected Cmp={ListProduct} />
          </Route>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
