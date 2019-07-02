import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize CSS
    M.AutoInit();
  });
  return <div className='App'>my app</div>;
};

export default App;
