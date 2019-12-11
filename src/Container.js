import React, { useState, useEffect } from "react";
import Display from "./Components/Display";
import KeyPad from "./Components/KeyPad";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as math from "mathjs";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 300,
    backgroundColor: "black"
  }
}));

function Container(props) {
  const classes = useStyles();
  const [expression, setExpression] = useState("0");
  const [errored, setErrored] = useState(false);
  const operationKeys = ["C", "+", "-", "*", "/", "="];
  let exp = "";

  const keyPressFunction = event => {
    let value = event.key;
    try {
      if (value >= 0 || event.keyCode === 46) {
        exp = exp + value;
      }
      if (operationKeys.includes(value)) {
        if (event.keyCode === 61) {
          exp = math.evaluate(exp);
        } else if (value === "C") {
          exp = "0";
        } else {
          exp = exp + value;
        }
      }
      if (event.keyCode === 13) {
        exp = math.evaluate(exp);
      }
      if (event.keyCode === 13) {
        exp = math.evaluate(exp);
      }
      setExpression(exp);
      setErrored(false);
    } catch (error) {
      exp = "Error";
      setExpression(exp);
      exp = "";
      setErrored(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", keyPressFunction, false);
    return () => {
      document.removeEventListener("keypress", keyPressFunction, false);
    };
  }, []);

  const receiveKeySelections = value => {
    let updatedExpression = expression;
    errored && (updatedExpression = "");
    try {
      value === "C"
        ? (updatedExpression = "0")
        : value === "="
        ? (updatedExpression = math.evaluate(updatedExpression))
        : (updatedExpression = updatedExpression + value);
      setExpression(updatedExpression);
      setErrored(false);
    } catch (error) {
      updatedExpression = "Error";
      setExpression(updatedExpression);
      setErrored(true);
    }
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Display dispValue={expression} />
        <KeyPad
          numkeys={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]}
          onClick={receiveKeySelections}
        />
      </Paper>
    </>
  );
}

export default Container;
