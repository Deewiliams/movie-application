import { Typography } from "@material-ui/core";
import React from "react";

const TextMesage = ({message}) => {
  return (
    <Typography
      paragraph
      variant="body2"
      color="textSecondary"
      component="p"
      style={{ textAlign: "center", fontSize: 30 }}
    >
      There are no {message}  movies
    </Typography>
  );
};

export default TextMesage;
