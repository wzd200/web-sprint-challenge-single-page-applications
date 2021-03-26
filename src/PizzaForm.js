import React from 'react';
import { useHistory } from 'react-router-dom'

export default function PizzaForm(props) {
    // Destructuring Props //
    const { values, submit, change, disabled, errors } = props;

    // onSubmit & onChange //
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { checked, value, name, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }
    
    // Route to PizzaConfirmation //
    const history = useHistory()

    const routeToPizzaConfirmation = () => {
        history.push('/PizzaConfirmation')
    }

    return (
        <div>
          <h2>Order your ideal pizza</h2>
          <form onSubmit={onSubmit}>
              <p>Tell us your name:</p>
              <label>
                  Name:
                  <input name='name' type='text' onChange={onChange} />
              </label>
              <div style={{ color: 'red'}}>
                  <div>
                      {errors.name}
                  </div>
              </div>
              <p>Select your pizza size:</p>
              <label>
                  Pizza Size:
                  <select name='pizzasize'>
                      <option value='1'>Personal Pan</option>
                      <option value='2'>Small</option>
                      <option value='3'>Medium</option>
                      <option value='4'>Large</option>
                  </select>
              </label>
              <p>Select your toppings:</p>
              <label>
                  Pepperoni
                  <input name='pepperoni' type='checkbox' onChange={onChange} />
              </label>
              <label>
                  Sausage
                  <input name='sausage' type='checkbox' onChange={onChange} />
              </label>
              <label>
                  Peppers
                  <input name='peppers' type='checkbox' onChange={onChange} />
              </label>
              <label>
                  Sun-Dried Tomatoes
                  <input name='sundriedtomatoes' type='checkbox' onChange={onChange} />
              </label>
              <p>Any special requests?</p>
              <label>
                  Special Requests:
                  <input name='specialrequests' type='text' onChange={onChange} />
              </label>
          </form>
          <button>Add Pizza to Order</button>
          <button onClick={routeToPizzaConfirmation} disabled={disabled}>Order Pizza</button>
        </div>
    )
}