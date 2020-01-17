import React from "react";
import axios from "axios"

import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";

import bg1 from "./images/soccer_field1.webp";
import bg2 from "./images/soccer_field2.webp";
import bg3 from "./images/soccer_field3.webp";

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

    let bgImage = 3;

    if (this.state.players.length === 0)
      { return "Loading data..."; }

    return (
      <div className={"App"}>
        <Navbar />
        <DataTable playerData={this.state.players} />
    </div>
    )

  }
}

export default App;
