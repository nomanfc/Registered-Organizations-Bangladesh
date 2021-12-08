import React, {useState, useEffect} from "react";
import BasicSortingTable from "./Table/BasicSortingTable";

import * as s from "../Common.styled";

const snackbar = localStorage.getItem("open");

const AllOrg = () => {

  return (
    <s.Container>
      <p
        style={{
          marginTop: "75px",
          textAlign: "center",
          color: "#099F19",
          textShadow: "1px 1px 1px gray",
          fontSize: "30px",
        }}
      >
        নিবন্ধনকৃত প্রতিষ্ঠান সমূহ
      </p>
      <s.TableCon>
        <BasicSortingTable />
      </s.TableCon>
    </s.Container>
  );
};

export default AllOrg;
