import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import FullStructure from "../SideDrawer/FullStructure";
import DashBoard from "../Dashboard/DashBoard";
import AllOrg from "../Organizations/AllOrg";
import AddOrg from "../Organizations/AddOrg";
import EditOrg from "../Organizations/EditOrg";

import AddUser from "../Users/AddUser";
import AllUsers from "../Users/AllUsers";
import EditUser from "../Users/EditUser";



const AdminPanel = () => {
  const theme = useTheme();

  return (
    <div className={theme.root} style={{ display:"flex" }}>
      <CssBaseline />
      <FullStructure />
      <main className={theme.content} style={{ marginTop: "75px", width: "90%", margin: "auto", minHeight: "100vh" }}>
        <div className={theme.toolbar} style={{ marginTop: "20px" }} />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="allorg" element={<AllOrg />} />
            <Route path="addorg" element={<AddOrg />} />
            <Route path="editorg" element={<EditOrg />} />

            <Route path="adduser" element={<AddUser />} />
            <Route path="allusers" element={<AllUsers />} />
            <Route path="edituser" element={<EditUser />} />
          </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;
