import React from 'react';
import StockBoard from './StockBoard';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function BoardCard(props) {
  const { board, minVolume, maxVolume, addModelToQuiver } = props ;

  const addToQuiver = (dimensions, id) => {
    addModelToQuiver(board.model, board.image, dimensions);
  }

  return (
    <div>
            <Card>
              <Grid container spacing={0}>
                <Grid item xs={8}>
                  <CardMedia
                    component="img"
                    alt="surfboardPicture"
                    height="300"
                    image={board.image}
                    title="surfboard"
                    style={{
                      objectFit: "contain",
                      justifyContent: "flex-start"
                    }}
                  />
                </Grid>
                <Grid item xs={4} style={{ height: 300, overflow: "auto" }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {board.model}
                  </Typography>

                  {board.dimensions.map(
                   (dim, index)=>
                      dim.volume > minVolume &&
                      dim.volume < maxVolume && (
                        <div>
                         <StockBoard
                         dimensions={dim}
                         id={index}
                         key={index}
                         addToQuiver={addToQuiver}
                         />
                          <hr />
                        </div>
                      )
                  )}
                </Grid>
              </Grid>
            </Card>
    </div>
  )
}
