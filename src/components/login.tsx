import { Button, TextField } from "@mui/material";
import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login-main">
      <div className="text">
        <TextField
          id="standard-basic"
          label="Login"
          variant="standard"
          color="success"
        />
      </div>
      <div className="text">
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          color="success"
        />
      </div>

      <Button variant="contained">Login</Button>
    </div>
  );
};
