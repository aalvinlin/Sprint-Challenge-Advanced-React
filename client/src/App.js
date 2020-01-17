import React from "react";
import axios from "axios"

import DataTable from "./components/DataTable";

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    
    // retrieve data from server
    axios.get("http://localhost:5000/api/players")
    
    .then(response => {

      console.log("response from server:", response);

      this.setState({players: response.data});

    })

    .catch(response => {

      console.log("error: response from server:", response);

    })

  }

  render() {

    if (this.state.players.length === 0)
      { return "Loading data..."; }

    return (
      <div className="App">
        <h1>2019 Women's World Cup Data</h1>
        <DataTable playerData={this.state.players} />
    </div>
    )

  }
}

export default App;
