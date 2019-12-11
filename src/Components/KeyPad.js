import React from "react";
import { Paper, Typography, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "auto",
    maxWidth: 300,
    backgroundColor: "lightgray"
  },
  btnColor: {
    backgroundColor: "orange"
  }
}));

function KeyPad(props) {
  const classes = useStyles();
  const operationKeys = ["C", "+", "-", "*", "/", "="];

  const onBtnClick = (event, value) => {
    props.onClick(value);
  };
  const generateKeyPad = () => {
    return (
      <>
        <p></p>
        <Paper className={classes.paper} key={"test"}>
          {generateOperationsKeyPad()}
          {props.numkeys.map(numkey => {
            return (
              <ButtonGroup key={"btn-" + numkey}>
                <Button
                  style={{ width: 100, height: 50, background: "#e9ecf1" }}
                  key={"key-" + numkey}
                  value={numkey}
                  onClick={e => onBtnClick(e, numkey)}
                >
                  <Typography key={"typ-" + numkey}>{numkey}</Typography>
                </Button>
              </ButtonGroup>
            );
          })}
        </Paper>
      </>
    );
  };
  const generateOperationsKeyPad = () => {
    return (
      <>
        {operationKeys.map(numkey => {
          return (
            <ButtonGroup key={"opsbtn-" + numkey}>
              <Button
                className={classes.btnColor}
                style={{ width: 100, height: 50, border: true }}
                key={"opskey-" + numkey}
                value={numkey}
                onClick={e => onBtnClick(e, numkey)}
              >
                <Typography key={"opstyp-" + numkey}>{numkey}</Typography>
              </Button>
            </ButtonGroup>
          );
        })}
      </>
    );
  };
  return <>{generateKeyPad()}</>;
}

export default KeyPad;
