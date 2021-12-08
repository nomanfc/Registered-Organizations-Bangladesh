import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as s from "./LandingPage.styled";
import SearchBar from "./Searchbar";
import { getOrgs } from "../../Redux/action/Orgs";

const authentication = JSON.parse(localStorage.getItem("profile"))
var auth;
const LandingPage = () => {

  if(authentication?.success === 1){
    auth = true;
  }

  return (
    <s.Container>
      <s.TitleContainer>
        <s.ContentHolder>
          <s.TitleText>নিবন্ধনকৃত প্রতিষ্ঠান সমূহ</s.TitleText>
          <s.Searchbar>
            <SearchBar />
          </s.Searchbar>
          <Link to="/login">
            <s.Login isLoggedin={auth}>অফিস লগইন</s.Login>
          </Link>
        </s.ContentHolder>
      </s.TitleContainer>

      <s.ContentBodyContainer>
        <s.TotalOrganization>
          <s.TotalOrganizationText>
            সর্বমোট প্রতিষ্ঠান সংখ্যাঃ ০৯
          </s.TotalOrganizationText>

        </s.TotalOrganization>
        <s.Content>
          <s.ConTitle>প্রতিষ্ঠানের নাম</s.ConTitle>
          <s.ContentBody>
            <s.ContentBodyAddress>
            ঠিকানাঃ আফতাবনগর, রামপুরা, ঢাকা।
            </s.ContentBodyAddress>
            <s.ContentBodyPhone>মোবাইলঃ ০১৭৮১১৫৬৯৮৬</s.ContentBodyPhone>
            <s.ContentBodyEmail>
            ইমেইলঃ organization@gmail.com
            </s.ContentBodyEmail>
            <s.ContentBodyWebsite>
            ওয়েবসাইটঃ <a href="##"> www.organizationdomain.com</a>
            </s.ContentBodyWebsite>
          </s.ContentBody>
        </s.Content>

      </s.ContentBodyContainer>
    </s.Container>
  );
};

export default LandingPage;
