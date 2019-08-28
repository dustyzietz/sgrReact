import React, { Component, Fragment } from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";

export class CustomDialog extends Component {
  state = {
    newBoard: {
      dimensions: {
        height1: 0,
        height2: 0,
        width1: 0,
        width2: 0,
        width3: 0,
        thickness1: 0,
        thickness2: 0,
        thickness3: 0,
        volume: 0
      },
    }
    };
    
  componentDidMount = () => {
    this.setState({
        newBoard: {...this.props.customBoard}
      })
  };

  handleChange = event => {
    this.setState({
      newBoard: {
        ...this.state.newBoard ,dimensions: {...this.state.newBoard.dimensions, [event.target.name]: event.target.value
      }
      }
    });
  };

  findvolumeRatio = () => {
    const {height1, height2, width1, width2, width3, thickness1, thickness2, thickness3, volume} = this.props.customBoard.dimensions;

    const h = height1 * 12 + height2;
    const w = width2 !== 0 ?width1 + (width2 / width3) 
    : width1 ;
    const t = thickness2 !== 0 ?thickness1 + (thickness2 / thickness3) 
    : thickness1 ;
    const volumeRatio = volume / ( h * w * t );
    return volumeRatio ;
  };

 
findVolume = () => {
  const {height1, height2, width1, width2, width3, thickness1, thickness2, thickness3, volume} = this.state.newBoard.dimensions;

  const h = Number(height1) * 12 + Number(height2);
  const w = width2 !== 0 ?Number(width1) + Number(width2 / width3) 
  : width1 ;
  const t = thickness2 !== 0 ? Number(thickness1) + Number(thickness2 / thickness3) 
  : thickness1 ;

 const vRatio = this.findvolumeRatio();
 const newVolume = (vRatio * h * w * t).toFixed(1) ;
  
  this.setState({
    newBoard: {
      ...this.state.newBoard,
      dimensions: {...this.state.newBoard.dimensions, volume: newVolume}
      
    }
  });
  console.log(newVolume, vRatio, h, w, t);
};

 addBoard = () => {
   console.log(this.state.newBoard.id);
  this.props.handleDelete(this.state.newBoard.id);
   this.props.addModelToQuiver(this.state.newBoard.model, this.state.newBoard.image, this.state.newBoard.dimensions, this.state.newBoard.id);
   this.props.toggleDialog()
 };

     
  
  render() {
    const {newBoard} = this.state;
    const {customBoard} = this.props;
    return (
      <div>
         <Fragment>
            <DialogContent>
              <DialogTitle style={{ display: "inline" }}>
                {customBoard.model}
              </DialogTitle>
              <DialogContentText style={{ display: "inline" }}>
                {`${customBoard.dimensions.height1}'${customBoard.dimensions.height2}" x ${customBoard.dimensions.width1}"${customBoard.dimensions.width2}/${customBoard.dimensions.width3} x ${customBoard.dimensions.thickness1}"${customBoard.dimensions.thickness2}/${customBoard.dimensions.thickness3} 
         ${customBoard.dimensions.volume}L `}
              </DialogContentText>
              <DialogTitle style={{ display: "inline" }}>
                Enter Custom Dimensions
                <br />
                Height:
              </DialogTitle>
              <TextField
                id="outlined-number"
                label=""
                name="height1"
                index="0"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, margin: 0 }}
                value={newBoard.dimensions.height1}
                onChange={this.handleChange}
              />
              feet
              <TextField
                id="outlined-number"
                label=""
                name="height2"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, margin: 0 }}
                onChange={this.handleChange}
                value={newBoard.dimensions.height2}
              />
              inches
              <DialogTitle style={{ display: "inline" }}>Width:</DialogTitle>
              <TextField
                id="outlined-number"
                label=""
                name="width1"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, margin: 0 }}
                onChange={this.handleChange}
                value={newBoard.dimensions.width1}
              />
              and
              <TextField
                id="outlined-number"
                label=""
                name="width2"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, margin: 0 }}
                onChange={this.handleChange}
                value={newBoard.dimensions.width2}
              />
              {`/`}
              <TextField
                id="outlined-number"
                label=""
                name="width3"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, margin: 0 }}
                onChange={this.handleChange}
                value={newBoard.dimensions.width3}
              />
              inches
              <br />
              <DialogTitle style={{ display: "inline" }}>
                Thickness:
              </DialogTitle>
              <TextField
                id="outlined-number"
                label=""
                name="thickness1"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, margin: 0 }}
                onChange={this.handleChange}
                value={newBoard.dimensions.thickness1}
              />
              and
              <TextField
                id="outlined-number"
                label=""
                name="thickness2"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, margin: 0 }}
                onChange={this.handleChange}
                value={newBoard.dimensions.thickness2}
              />
              {`/`}
              <TextField
                id="outlined-number"
                label=""
                name="thickness3"
                type="number"
                margin="normal"
                variant="outlined"
                style={{ width: 60, marginTop: 0 }}
                onChange={this.handleChange}
                value={newBoard.dimensions.thickness3}
              />
              inches
              <br />
              <DialogTitle style={{ display: "inline" }}>
                Volume:{newBoard.dimensions.volume}Liters
              </DialogTitle>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.findVolume}
                variant="contained"
                color="primary"
              >
                Find Volume
              </Button>
              <Button
                onClick={this.addBoard}
                variant="contained"
                color="primary"
              >
                Add to Quiver
              </Button>
            </DialogActions>
          </Fragment>
      </div>
    )
  }
}

export default CustomDialog
