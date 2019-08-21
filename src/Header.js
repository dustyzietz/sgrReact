import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

class Header extends Component {
  state = {
    value: 30
  };

   


  render() {
   const { value } = this.state;
   const { handleFilter } = this.props ;

    const style = {
      range: {
        width: "30%",
        marginTop: 20
      },
      rangeButton: {
        margin: 5
      }
    };
    
    const handleSubmit= () => {
    handleFilter(value)
    };

    const handleChange = (event, newValue) => {
      this.setState({
        value: newValue
      });
    };
     
    
   
    return (
      <div>
        <AppBar
          position="static"
          color="default"
          style={{ marginBottom: "20px" }}
        >
          <Toolbar>
            <Slider
              value={value}
              style={style.range}
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={0.1}
              marks
              min={25}
              max={35}
              onChange={handleChange}
            />
            <Typography variant="h6" color="inherit">
              {value}L Volume
            </Typography>
            <Button
              style={style.rangeButton}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Filter
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Header;