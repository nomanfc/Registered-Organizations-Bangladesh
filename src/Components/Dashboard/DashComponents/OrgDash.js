import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {BASE_URL} from '../../../Constants/Constants.js';
// import axios from "./axios/axios";
// import {useHistory} from 'react-router-dom'
import * as s from "../DashBoard.styled";
import CorporateFareSharpIcon from "@mui/icons-material/CorporateFareSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";

const OrgDash = () => {
  const [tableData, setTableData] = useState([]);
  const [access, setAccess] = useState([]);
  const history = useNavigate()

  useEffect(() => {
    axios.get(BASE_URL+"/org/")
    .then((response) =>{
        setTableData(response.data.data.length);
    }).catch((err) =>{
      console.log(err);
    })
  },[])


  //client has access
  // let ActiveUser = 0;
  // for (let i = 0; i < access?.length; i++) {
  //   if (access[i].type === "client") {
  //     ActiveUser = ActiveUser + 1;
  //   }
  // }

  const handleClick = () => {
      history("allorg")
  };

  return (
    <s.dashCards onClick={handleClick} style={{ cursor: "pointer" }}>
      <s.dashCardPic style={{}}>
        <CorporateFareSharpIcon
          style={{ height: "70px", width: "70px", color: "green" }}
        />
      </s.dashCardPic>
      <s.dashCardLine
        style={{
          justifyContent: "center",
          color: "#6f4283",
          textShadow: "1px 1px 1px gray",
          fontSize: "20px",
        }}
      >
        <p>নিবন্ধনকৃত প্রতিষ্ঠান সংখ্যা</p>
      </s.dashCardLine>
      <s.dashCardLine style={{ paddingLeft: "15px" }}>
        <h1>
          <b style={{ color: "#00BFFF" }}>{tableData}</b>
        </h1>
      </s.dashCardLine>
      <s.dashCardLine
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 15px",
        }}
      ></s.dashCardLine>
    </s.dashCards>
  );
};

export default OrgDash;
