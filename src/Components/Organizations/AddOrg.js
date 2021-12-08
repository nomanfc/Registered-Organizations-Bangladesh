import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { addOrgs } from "../../Redux/action/Orgs.js";



import * as s from "./Org.styled";

const AddOrg = () => {
  const [orgsData, setOrgsData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addOrgs(orgsData, navigate));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setOrgsData({ ...orgsData, [e.target.name]: e.target.value });
  };

  return (
    <s.Container>
      <p
        style={{
          width: "100%",
          textAlign: "center",
          color: "#6f4283",
          textShadow: "1px 1px 1px gray",
          fontSize: "25px",
        }}
      >
        প্রতিষ্ঠান নিবন্ধন ফরম
      </p>
      <s.RegisterArea>
        <s.RegisterSubArea>
          <TextField
            id="outlined-basic"
            label="১. লিপিবদ্ধ করিবার তারিখ"
            size="small"
            required
            type="date"
            name="listingDate"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            style={{
              width: "100%",
              margin: "30px auto auto auto",
              background: "white",
            }}
          />

          <TextField
            id="outlined-basic"
            label="২. সংস্থার নাম"
            size="small"
            required
            name="orgName"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="৩. সংস্থার ঠিকানা"
            size="small"
            required
            name="orgAddress"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="৪.রেজিস্ট্রি নম্বর"
            size="small"
            required
            name="regNo"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="৫.রেজিস্ট্রিকরণের তারিখ"
            size="small"
            required
            type="date"
            name="regDate"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="৬. স্থাপনের তারিখ"
            size="small"
            type="date"
            required
            name="placementDate"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="৭. সর্বশেষ কার্যকারী কমিটি অনুমদনের তারিখ"
            size="small"
            type="date"
            required
            name="lastActiveCommiteApproveDate"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </s.RegisterSubArea>

        <s.RegisterSubArea>
          <TextField
            id="outlined-basic"
            label="৮. সংস্থার মোবাইল নম্বর"
            size="small"
            required
            name="orgMobileNo"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "30px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="outlined-basic"
            label="৯. সংস্থার ইমেইল"
            size="small"
            required
            name="orgEmail"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১০. সংস্থার ওয়েবসাইট"
            size="small"
            required
            name="orgWebsite"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১১. সংস্থার লক্ষ্য ও উদ্দেশ্যসমূহ"
            size="small"
            required
            name="orgMission"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১২. কার্য এলাকা"
            size="small"
            required
            name="workArea"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১৩. নাম"
            size="small"
            required
            name="name"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১৪. পেশা"
            size="small"
            required
            name="ocupation"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </s.RegisterSubArea>

        <s.RegisterSubArea>
          <TextField
            id="outlined-basic"
            label="১৫. ঠিকানা"
            size="small"
            required
            name="address"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "30px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="outlined-basic"
            label="১৬. কর্মকর্তাগণের নাম"
            size="small"
            required
            name="officerName"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১৭. কর্মকর্তাগণের পদের নাম"
            size="small"
            required
            name="officerRankName"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১৮. কর্মকর্তাগণের ঠিকানা"
            size="small"
            required
            name="officerAddress"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="১৯. যে ব্যাংক/ব্যাংকসমূহে তহবিল জমা রাখা হয়েছে"
            size="small"
            required
            name="bankAccount"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-basic"
            label="২০. মন্তব্য"
            size="small"
            multiline
            maxRows={4}
            required
            name="coment"
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {/* <TextField
            id="outlined-basic"
            label="নাম"
            size="small"
            required
                name=""
                onChange={handleChange}
            style={{
              width: "100%",
              margin: "20px auto auto auto",
              background: "white",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
        </s.RegisterSubArea>
        <s.ButtonArea>
          <Button
            variant="contained"
            size="large"
            style={{
              margin: "auto",
              width: "100%",
              background: "#6f4283",
            }}
            onClick={handleSubmit}
          >
            দাখিল করুন
          </Button>
        </s.ButtonArea>
      </s.RegisterArea>
    </s.Container>
  );
};

export default AddOrg;
