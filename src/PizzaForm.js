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
          <h2>Tells us about your ideal pizza</h2>
          <button onClick={routeToPizzaConfirmation}>Order Pizza</button>
        </div>
    )
}