import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#00D2BC",
    textTransform: "none"
},
}));

const AppButton = (button) => {
  const { label, onClick, key, variant, color } = button;
  const classes = useStyles();

  return (
    <Button
      label={label}
      onClick={onClick}
      key={key}
      variant={variant}
      className={classes.button}     
    >
       
       

    </Button>
  );
};

export default AppButton;
