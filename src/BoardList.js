import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { models } from "./store";

export default function BoardList(props) {
  const {minVolume, maxVolume} = props;
  return (
    <div>
      <Grid container spacing={3}>
        {models.map(mod => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <Grid container spacing={0}>
                <Grid item xs={8}>
                  <CardMedia
                    component="img"
                    alt="surfboardPicture"
                    height="300"
                    image={mod.image}
                    title="surfboard"
                    style={{
                      objectFit: "contain",
                      justifyContent: "flex-start"
                    }}
                  />
                </Grid>
                <Grid item xs={4} style={{ height: 300, overflow: "auto" }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {mod.model}
                  </Typography>

                  {mod.dimensions.map(dim => (
                    dim.volume > minVolume &&
                    dim.volume < maxVolume &&
                   <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {dim.height} {dim.width} {dim.thickness} {dim.volume}L
                      </Typography>
                      <hr />
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
