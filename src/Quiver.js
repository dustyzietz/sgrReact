import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';


export default function Quiver(props) {
  const { quiver, handleDelete, updateDialog } = props ;
  const onDelete = (board) => {
    handleDelete(board.id)
  };
  const customize = (board) => {
    onDelete(board);
    updateDialog(board); 
  };
  return (
    <div>
      <Grid container spacing={3}>
      {quiver.map(board => 
      <Grid item sm={12} md={6} >
       <Card style={{textAlign: 'center'}}>
            <Typography gutterBottom variant="h5" component="h2">
             {board.model}
           </Typography>
                 <Typography variant="h6" color="textSecondary" component="p">
        {board.dimensions.height} {board.dimensions.width} {board.dimensions.thickness}<br/> 
         {board.dimensions.volume}L <br/>
        <Button 
         variant='contained'
         color="secondary"
         onClick={() => customize(board)}
         >
          customize
        </Button>
        <IconButton 
        size="medium" color="primary" aria-label="add" style={{marginLeft:'10px'}} onClick={() => onDelete(board)} >
          <DeleteIcon />
        </IconButton>
      </Typography>
           <CardMedia
             component="img"
             alt="surfboardPicture"
             height="300"
             image={board.image}
             title="surfboard"
             style={{
               objectFit: "contain"
             }}
           />
          </Card>
         </Grid>
     
      ) }
      </Grid>
    </div>
    )}

