import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

// Components for Routes //
import Home from './Home';
import PizzaForm from './PizzaForm';
import PizzaConfirmation from './PizzaConfirmation';

// Form Initialization //
const initialFormValues = {
  name: '',
  pizzasize: '1',
  pepperoni: false,
  sausage: false,
  peppers: false,
  sundriedtomatoes: false,
  specialrequests: '',
};

const initialFormErrors = {
  name: '',
  pizzasize: '1',
  pepperoni: false,
  sausage: false,
  peppers: false,
  sundriedtomatoes: false,
  specialrequests: '',
};

const initialOrder = [];

const initialDisabled = true;

const App = () => {

  // States //
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // Helpers //

  return (
    <div>
      <nav>
          <h1>Lambda Eats</h1>
          <Link to='/'>Home</Link>
          <Link to='/PizzaForm'>Make a Pizza</Link>

          <Switch>
            <Route path={'/PizzaConfirmation'}>
              <PizzaConfirmation />
            </Route>
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
