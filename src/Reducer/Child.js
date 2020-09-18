import React, { useReducer } from 'react';
import Reducer from './Reducer';

function Child() {

    const [state, dispatch] = useReducer(Reducer,10)
    return (
        <div>

            <h1>Counter from Reducer</h1>
            Counter: &nbsp; <b>{state}</b>
            <div>
            <button onClick={()=> {dispatch('INCREMENT')}}>Increment</button>
                </div> 
        </div>
    )
}

export default Child
