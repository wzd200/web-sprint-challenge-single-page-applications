import React from 'react';
import { useHistory } from 'react-router-dom'

export default function PizzaForm() {
    
    // Route to PizzaConfirmation //
    const history = useHistory()

    const routeToPizzaConfirmation = () => {
        history.push('/PizzaConfirmation')
    }

    return (
        <div>
          <h2>Order your ideal pizza</h2>
          <form>
              <p>Tell us your name:</p>
              <label>
                  Name:
                  <input name='name' type='text' />
              </label>
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
                  <input name='pepperoni' type='checkbox' />
              </label>
              <label>
                  Sausage
                  <input name='sausage' type='checkbox' />
              </label>
              <label>
                  Peppers
                  <input name='peppers' type='checkbox' />
              </label>
              <label>
                  Sun-Dried Tomatoes
                  <input name='sundriedtomatoes' type='checkbox' />
              </label>
              <p>Any special requests?</p>
              <label>
                  Special Requests:
                  <input name='specialrequests' type='text' />
              </label>
          </form>
          <button>Add Pizza to Order</button>
          <button onClick={routeToPizzaConfirmation}>Order Pizza</button>
        </div>
    )
}