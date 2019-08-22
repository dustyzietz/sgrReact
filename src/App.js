import React, { Component } from "react";
import "./App.css";
import { shapers, models } from "./store";
import Header from "./Header";
import BoardList from "./BoardList";
import Quiver from './Quiver';
import uuid from 'uuid';
import CustomDialog from "./CustomDialog";

export class App extends Component {
  state = {
    minVolume: "20",
    maxVolume: "40",
    quiver: [],
    quiverOn: false,
    dialogOn: false,
    customBoard: []
  };

  addModelToQuiver  = (model, image, dimensions) => {
   this.setState({
     quiver:
     [...this.state.quiver,{model:model,image:image, dimensions:dimensions, id: uuid(), key: uuid() }]
   });
   this.toggleQuiver();
  };

  handleFilter = selectedVolume => {
    const minVolume = (selectedVolume * .95) ;
    const maxVolume = (selectedVolume * 1.05) ;
    this.setState({
      minVolume: minVolume, maxVolume: maxVolume
    });
  };

  toggleQuiver = () => {
    this.setState({quiverOn : !this.state.quiverOn})
  };

  handleDelete = (id) => {
    this.setState({
      quiver:
      this.state.quiver.filter(board => board.id !== id )
    })
  };

  toggleDialog = () => {
    this.setState({
      dialogOn: !this.state.dialogOn
    })
  };

  updateDialog = (board) => {
    this.setState({
      customBoard:
      this.state.quiver.filter(b => board.id == b.id )
    });
    this.toggleDialog();
  }

  render() {
    const { minVolume, maxVolume, quiver, quiverOn, dialogOn, customBoard } = this.state;

    return (
      <div>
        <Header toggleQuiver={this.toggleQuiver} handleFilter={this.handleFilter} quiverOn={quiverOn}/>
        {quiverOn ? 
        <Quiver
        updateDialog={this.updateDialog}
        toggleDialog={this.toggleDialog} 
        handleDelete={this.handleDelete}
        quiver={quiver}/>
        : <BoardList addModelToQuiver={this.addModelToQuiver} minVolume={minVolume} maxVolume={maxVolume}  
        />
      } 
        <CustomDialog customBoard={customBoard} dialogOn={dialogOn} updateDialog={this.updateDialog}/>
        
        
        
      </div>
    );
  }
}

export default App;
