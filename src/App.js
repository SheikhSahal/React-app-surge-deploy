import React, {useState} from 'react';
import './App.css';
import Wed from './wed/wed'

function App() {
  const [nam, setname] = useState({
    name : 'Tooba',
    behave: 'Before'
  })
  

  return (
    <div className="App">
      <div>
        <Wed names={nam.name} behavior={nam.behave}/>
      </div>
        <button onClick={()=> {setname({name: 'Sahal tooba', behave: 'After'})}}>Update name</button>
    </div>
  );
}

export default App;
