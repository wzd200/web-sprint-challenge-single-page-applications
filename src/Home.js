import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory()

    const routeToPizzaForm = () => {
        history.push('/PizzaForm')
    }

    return (
        <div>
          <h2>Home</h2>
          <button onClick={routeToPizzaForm}>Want a pizza?</button>
        </div>
    )
}