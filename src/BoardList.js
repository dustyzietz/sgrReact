import React from "react";
import Grid from "@material-ui/core/Grid";
import { models } from "./store";
import BoardCard from './BoardCard';

export default function BoardList(props) {
  const { minVolume, maxVolume, addModelToQuiver } = props;

  
  return (
    <div>
      <Grid container spacing={3}>
        {models.map(mod => (
        <Grid item sm={12} lg={6} xl={4}>
         <BoardCard 
         minVolume={minVolume}
         maxVolume={maxVolume}
         board={mod}
         key={mod.model}
         addModelToQuiver={addModelToQuiver}
         />
         </Grid>
        ))}
      </Grid>
    </div>
  );
}
