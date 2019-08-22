import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Header";
import BoardList from "./BoardList";
import Quiver from "./Quiver";
import uuid from "uuid";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export class App extends Component {
  state = {
    minVolume: "20",
    maxVolume: "40",
    quiver: [],
    quiverOn: false,
    dialogOn: false,
    nextOn: false,
    customBoard: {},
    formStockBoard: {},
    formCustomBoard: {},
  };

  addModelToQuiver = (model, image, dimensions) => {
    this.setState({
      quiver: [
        ...this.state.quiver,
        {
          model: model,
          image: image,
          dimensions: dimensions,
          id: uuid(),
          key: uuid()
        }
      ]
    });
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

  toggleNext = () => {
    this.setState({
      nextOn: !this.state.nextOn
    });
  };

  updateDialog = board => {
    this.setState({
      customBoard: {
        model: board.model,
        id: board.id,
        image: board.image,
        height: board.dimensions.height,
        width: board.dimensions.width,
        thickness: board.dimensions.thickness,
        volume: board.dimensions.volume
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
      nextOn,
      customBoard: { model, height, width, thickness, volume }
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
          { !nextOn ?
          <Fragment>
          <DialogContent>
            <DialogContentText>
              {model} <br /> {height} {width} {thickness} <br />
              {volume}Liters
            </DialogContentText>
            <DialogTitle style={{display:'inline'}} >Enter Stock Dimensions<br/>Height:</DialogTitle>
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            feet
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            inches
            <DialogTitle style={{display:'inline'}}>Width:</DialogTitle>
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            and
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            {`/`}
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            inches
            <br />
            <DialogTitle style={{display:'inline'}}>Thickness:</DialogTitle>
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            and
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            {`/`}
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, marginTop: 0 }}
            />
            inches
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleNext} variant='contained' color="primary">
              NEXT
            </Button>
          </DialogActions>
          </Fragment>
          :
          <Fragment>
          <DialogContent>
            <DialogContentText>
              {model} <br /> {height} {width} {thickness} <br />
              {volume}Liters
            </DialogContentText>
            <DialogTitle style={{display:'inline'}} >Enter Custom Dimensions<br/>Height:</DialogTitle>
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            feet
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            inches
            <DialogTitle style={{display:'inline'}}>Width:</DialogTitle>
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            and
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            {`/`}
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            inches
            <br />
            <DialogTitle style={{display:'inline'}}>Thickness:</DialogTitle>
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            and
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, margin: 0 }}
            />
            {`/`}
            <TextField
              id="outlined-number"
              label=""
              type="number"
              margin="normal"
              variant="outlined"
              style={{ width: 60, marginTop: 0 }}
            />
            inches
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleNext} variant='contained' color="primary">
              NEXT
            </Button>
          </DialogActions>
          </Fragment>}
        </Dialog>
      </div>
    );
  }
}

export default App;
