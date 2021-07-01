import React , {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from '../../it-log/src/Components/layout/SearchBar'
import Logs from '../../it-log/src/Components/logs/Logs';
import Addbtn from '../../it-log/src/Components/layout/Addbtn'
import './App.css';
import AddLogModal from './Components/logs/AddLogModal'

 const App = ()=> {
   useEffect(() => {
     //Init Materialize JS 
     M.AutoInit();
   }, [])
  return (
    <Fragment>
      <SearchBar/>
      <div className="container">
        <Addbtn/>
        <AddLogModal/>
        <Logs/>
      </div>
    </Fragment>

  );
}

export default App;
