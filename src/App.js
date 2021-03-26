import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import * as yup from 'yup'
import schema from './schema'

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

  const postNewOrder = (newOrder) => {
    axios
      .post('https://reqres.in/', newOrder)
      .then(res => {
        console.log(res)
        setOrder([res.data, ...order]);
        setFormValues(initialFormValues);
        console.log(newOrder)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // Event Handlers //
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
      setFormValues({
        ...formValues,
        [name]: value,
      });
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      pizzasize: formValues.pizzasize,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      peppers: formValues.peppers,
      specialrequests: formValues.specialrequests,
      
    };
    postNewOrder(newOrder);
  };

  // Side Effects //
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  });

 

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
              <PizzaForm 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}/>
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
