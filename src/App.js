import React, { useState } from 'react';
import './App.css';
import Parent from './Context_API/Parent';
import Context from './Context_API/Context';
import ReducerParent from './Reducer/Parent';


function App() {
  const setCounter = useState(25);

  return (
    <div className="App">
    <Context.Provider value={setCounter}>
      <Parent />
    </Context.Provider>


    <ReducerParent>

    </ReducerParent>

    </div>
  );
}

export default App;
