import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import BoardList from "./BoardList";
import Quiver from './Quiver';
import uuid from 'uuid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export class App extends Component {
  state = {
    minVolume: "20",
    maxVolume: "40",
    quiver: [],
    quiverOn: false,
    dialogOn: false,
    customBoard: {}
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
      customBoard: { model:board.model, id:board.id, image:board.image, height:board.dimensions.height, width:board.dimensions.width, thickness:board.dimensions.thickness, volume:board.dimensions.volume }
    });
    this.toggleDialog();
  }

  render() {
    const { minVolume, maxVolume, quiver, quiverOn, dialogOn, customBoard: { model, height, width, thickness} } = this.state;

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
         <Dialog open={dialogOn} onClose={this.toggleDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {model}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="height"
            label='height'
            type="text"
            value={height}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="width"
            label="width"
            type="text"
            value={width}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="thickness"
            label="thickness"
            type="text"
            value={thickness}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.toggleDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={this.toggleDialog} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
        
        
        
      </div>
    );
  }
}

export default App;
