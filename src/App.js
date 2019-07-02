import React, { Fragment, useEffect } from 'react';
import SearchBar from './Components/layout/SearchBar';
import Logs from './Components/logs/Logs';
import AddBtn from './Components/layout/AddBtn';
import AddLogModal from './Components/logs/AddLogModal';
import EditLogModal from './Components/logs/EditLogModal';
import AddTechModal from './Components/techs/AddTechModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize CSS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
