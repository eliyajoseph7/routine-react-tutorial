import React from 'react';
import Header from './components/Header'
import AddRoutine from './components/AddRoutine'
import Routines from './components/Routines'
function App() {
  return (
    <div className="App">
        <Header />
        <AddRoutine />
        <Routines />
    </div>
  );
}

export default App;
