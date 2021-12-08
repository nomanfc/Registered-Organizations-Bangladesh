import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";

import { useDispatch } from "react-redux";
import { signin } from "../../Redux/action/Signin.js";

import * as s from "./AdminLogin.styled";

const initialData = [
  {
    name: "",
    password: "",
  },
];

var loadingAlerts = JSON.parse(localStorage.getItem("loadingAlert"));
var authentication = JSON.parse(localStorage.getItem("profile"));

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [loadingAlert, setLoadingAlert] = useState(false);

  useEffect(() => {
    if (loadingAlerts) {
      setLoadingAlert(true);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingAlert(false);
    setLoading(true);
    dispatch(signin(formData, navigate));
  };

  return (
    <s.Container>
      <s.LoginContainer>
        <s.LoginArea>
          <h2 style={{ textAlign: "center", color: "#6f4283" }}>
            এখানে লগইন করুন
          </h2>
          <TextField
            id="outlined-basic"
            label="ইমেইল"
            size="small"
            name="email"
            required
            onChange={handleChange}
            variant="outlined"
            style={{
              width: "100%",
              margin: "40px auto auto auto",
              background: "white",
            }}
          />

          <TextField
            id="outlined-basic"
            label="পাসওয়ার্ড"
            type="password"
            size="small"
            name="password"
            onChange={handleChange}
            variant="outlined"
            required
            style={{
              width: "100%",
              margin: "20px auto auto auto",
            }}
          />
          <LinearProgress
            style={{
              marginTop: "25px",
              background: "purple",
              display: loading ? "block" : "none",
            }}
          />
          <Alert
            style={{
              marginTop: "20px",
              display: loadingAlert ? "flex" : "none",
              fontSize: "12px",
            }}
            severity="error"
          >
            Invalid Email or Password ! Try again
          </Alert>

          <Button
            variant="contained"
            size="small"
            endIcon={<SendIcon />}
            style={{
              width: "100%",
              margin: "15px auto auto auto",
              background: "#6f4283",
            }}
            onClick={handleSubmit}
          >
            প্রবেশ করুন
          </Button>
        </s.LoginArea>
      </s.LoginContainer>
    </s.Container>
  );
};

export default AdminLogin;
