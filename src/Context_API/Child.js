import React, { useContext } from 'react'
import context from './Context'

function Child() {

    let counterValue = useContext(context);
    console.log(counterValue);

    return (
        <div>
            <h1>Counter from Use Context</h1>
            Hellow from child <b>{counterValue[0]}</b>
            <div>
                <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment</button>
            </div>

            <hr />
        </div>
    )
}

export default Child
