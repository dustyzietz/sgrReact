import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export default function StockBoard(props) {
  const { dimensions, id, addToQuiver } = props ;

  const handleClick = () => {
    addToQuiver(dimensions,id)
  };

  return (
    <div>
      <Typography variant="body2" color="textSecondary" component="p">
       {`${dimensions.height} x ${dimensions.width} x ${dimensions.thickness}  ${dimensions.volume}L`} 
        <IconButton 
        onClick={handleClick}
        size="small" color="secondary" aria-label="add">
          <AddIcon />
        </IconButton>
      </Typography>
    </div>
  );
}
