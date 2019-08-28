import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

export default function StockBoard(props) {
  const {
    dimensions,
    dimensions: {
      height1,
      height2,
      width1,
      width2,
      width3,
      thickness1,
      thickness2,
      thickness3,
      volume
    },
    id,
    addToQuiver
  } = props;

  const handleClick = () => {
    addToQuiver(dimensions, id);
  };

  return (
    <div>
      <Typography variant="body2" color="textSecondary" component="p">
        {`${height1}'${height2}" x ${width1}" ${width2}/${width3} x ${thickness1}"  ${thickness2}/${thickness3} ${volume}L`}
        <IconButton
          onClick={handleClick}
          size="small"
          color="secondary"
          aria-label="add"
        >
          <AddIcon />
        </IconButton>
      </Typography>
    </div>
  );
}
