import React , {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from '../../it-log/src/Components/layout/SearchBar'
import Logs from '../../it-log/src/Components/logs/Logs';
import Addbtn from '../../it-log/src/Components/layout/Addbtn'
import './App.css';

import AddLogModal from './Components/logs/AddLogModal'
import EditLogModal from './Components/logs/EditLogModal'
import AddTechModal from './Components/Techs/AddTechModal'
import TechListModal from './Components/Techs/TechListModal'

//Redux
import {Provider} from 'react-redux';
import store from './store'


 const App = ()=> {
   useEffect(() => {
     //Init Materialize JS 
     M.AutoInit();
   }, [])
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar/>
      <div className="container">
        <Addbtn/>
        <AddLogModal/>
        <EditLogModal/>
        <AddTechModal/>
        <TechListModal/>
        <Logs/>
      </div>
    </Fragment>
    </Provider>

  );
}

export default App;
