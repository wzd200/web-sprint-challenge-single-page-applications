import React from "react";
import { Route, Link, Switch } from "react-router-dom";

// Components for Routes //
import Home from './Home';
import PizzaForm from './PizzaForm';
import PizzaConfirmation from './PizzaConfirmation';

const App = () => {
  return (
    <div>
      <nav>
          <h1>Lambda Eats</h1>
          <Link to='/'>Home</Link>
          <Link to='/PizzaForm'>Make a Pizza</Link>

          <Switch>
            <Route path={'/PizzaForm'}>
              <PizzaForm />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
      </nav>
    </div>
  );
};
export default App;
