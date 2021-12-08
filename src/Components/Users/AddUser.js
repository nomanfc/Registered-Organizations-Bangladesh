import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as s from "./User.styled.js";

const AddUser = () => {
  return (
    <s.Container style={{ }}>
      <s.RegisterArea>
        <p
          style={{
            textAlign: "center",
            color: "#6f4283",
            textShadow: "1px 1px 1px gray",
            fontSize: "25px",
          }}
        >
          ব্যবহারকারীর নিবন্ধন ফরম
        </p>
        <TextField
          id="outlined-basic"
          label="নাম"
          size="small"
          required
          variant="outlined"
          style={{
            width: "90%",
            margin: "10px auto auto auto",
            background: "white",
          }}
        />

        <TextField
          id="outlined-basic"
          label="ইমেইল"
          size="small"
          required
          variant="outlined"
          style={{
            width: "90%",
            margin: "1px auto auto auto",
            background: "white",
          }}
        />
        <TextField
          id="outlined-basic"
          label="মোবাইল"
          size="small"
          variant="outlined"
          style={{
            width: "90%",
            margin: "1px auto auto auto",
            background: "white",
          }}
        />
        <TextField
          id="outlined-basic"
          label="পাসওয়ার্ড"
          required
          size="small"
          variant="outlined"
          style={{
            width: "90%",
            margin: "1px auto auto auto",
            background: "white",
          }}
        />

        <TextField
          id="outlined-basic"
          label="কনফার্ম পাসওয়ার্ড"
          size="small"
          required
          variant="outlined"
          style={{
            width: "90%",
            margin: "1px auto auto auto",
            background: "white",
          }}
        />

        <Button
          variant="contained"
          size="small"
          style={{
            width: "90%",
            margin: "1px auto auto auto",
            background: "#6f4283",
          }}
        >
          দাখিল করুন
        </Button>
      </s.RegisterArea>
    </s.Container>
  );
};

export default AddUser;
