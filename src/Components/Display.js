import React from "react";
import { Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    paddingBottom: 10,
    margin: "auto",
    maxWidth: 300,
    height: 50,
    backgroundColor: "#cbced3",
    textAlign: "right"
  }
}));
function Display(props) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <TextField
          id="outlined-multiline-flexible"
          rowsMax="1"
          value={props.dispValue}
          style={{ width: 290, paddingRight: 5 }}
        ></TextField>
      </Paper>
    </>
  );
}

export default Display;
