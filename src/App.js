import React, { Component } from "react";
import "./App.css";
import { shapers, models } from "./store";
import Header from "./Header";
import BoardList from "./BoardList";

export class App extends Component {
  state = {
    minVolume: "20",
    maxVolume: "40"
  };


  handleFilter = selectedVolume => {
    const minVolume = (selectedVolume * .95) ;
    const maxVolume = (selectedVolume * 1.05) ;
    this.setState({
      minVolume: minVolume, maxVolume: maxVolume
    });
  }

  render() {
    const { minVolume, maxVolume } = this.state;

    return (
      <div>
        <Header handleFilter={this.handleFilter} />
        <BoardList minVolume={minVolume} maxVolume={maxVolume}
        />
      </div>
    );
  }
}

export default App;
