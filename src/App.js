import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {fetchSmurfs} from "./actions/index"
import {addSmurf} from "./actions/index"

class App extends Component {
  render() 
  
  {console.log(fetchSmurfs)
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList fetchSmurfs={fetchSmurfs}/>
          <AddForm addSmurf={addSmurf}/>
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.