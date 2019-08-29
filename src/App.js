import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import BoardList from "./BoardList";
import Quiver from "./Quiver";
import Dialog from "@material-ui/core/Dialog";
import CustomDialog from "./CustomDialog";

export class App extends Component {
  state = {
    minVolume: "20",
    maxVolume: "40",
    quiver: [],
    quiverOn: false,
    dialogOn: false,
    customBoard: {}
  };

  componentDidMount = () => {
    const boards = JSON.parse(window.localStorage.getItem("quiver"));
     this.setState({
       quiver: boards
     })
  };

  addModelToQuiver = (model, image, dimensions, id) => {
    this.setState({
      quiver: [
        ...this.state.quiver,
        {
          model: model,
          image: image,
          dimensions: dimensions,
          id: id
        }] },
       () => window.localStorage.setItem("quiver", JSON.stringify(this.state.quiver)) 
       );
    this.toggleQuiver();
    
  };

  handleFilter = selectedVolume => {
    const minVolume = selectedVolume * 0.95;
    const maxVolume = selectedVolume * 1.05;
    this.setState({
      minVolume: minVolume,
      maxVolume: maxVolume
    });
  };

  toggleQuiver = () => {
    this.setState({ quiverOn: !this.state.quiverOn });
  };

  handleDelete = id => {  
    this.setState({
      quiver: this.state.quiver.filter(board => board.id !== id)
    });
  };

  toggleDialog = () => {
    this.setState({
      dialogOn: !this.state.dialogOn
    });
  };

  updateDialog = board => {
    const { model, id, image, dimensions } = board;

    this.setState({
      customBoard: {
        model: model,
        id: id,
        image: image,
        dimensions: dimensions
      }
    });
    this.toggleDialog();
  };



  render() {
    const {
      minVolume,
      maxVolume,
      quiver,
      quiverOn,
      dialogOn,
      customBoard
    } = this.state;

    return (
      <div>
        <Header
          toggleQuiver={this.toggleQuiver}
          handleFilter={this.handleFilter}
          quiverOn={quiverOn}
        />
        {quiverOn ? (
          <Quiver
            updateDialog={this.updateDialog}
            toggleDialog={this.toggleDialog}
            handleDelete={this.handleDelete}
            quiver={quiver}
          />
        ) : (
          <BoardList
            addModelToQuiver={this.addModelToQuiver}
            minVolume={minVolume}
            maxVolume={maxVolume}
          />
        )}
        <Dialog
          open={dialogOn}
          onClose={this.toggleDialog}
          aria-labelledby="form-dialog-title"
        >
          <CustomDialog customBoard={customBoard} addModelToQuiver={this.addModelToQuiver} toggleDialog={this.toggleDialog} 
          handleDelete={this.handleDelete} />
        </Dialog>
      </div>
    );
  }
}

export default App;
