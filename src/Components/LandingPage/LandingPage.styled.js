import styled from "@emotion/styled";

export const Container = styled.div`
  height: fit-content;

  min-height: 100vh;
  width: 100%;
  padding-bottom: 15px;
  background: #099f19;
`;

export const TitleContainer = styled.div`
  height: 60px;
  width: 100%;
  background: #6f4283;
  display: flex;
`;

export const ContentHolder = styled.div`
  width: 60%;
  margin-left: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    justify-content: space-around;
  }
`;

export const TitleText = styled.div`
  font-size: 25px;
  color: white;
  width: fit-content;
  height: fit-content;
  text-shadow:  2px 0px 2px black;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Searchbar = styled.div`
  color: white;
  width: fit-content;
  height: fit-content;
  @media (max-width: 1080px) {
    display: none;
  }
`;
export const Login = styled.div`
  color: white;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  text-shadow:  1px 0px 1px gray;
  display: ${props=>(props.isLoggedin) ? 'none': 'block'}
`;

export const ContentBodyContainer = styled.div`
  border-radius: 10px;
  height: auto;
  width: 90%;
  margin: 25px auto auto auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    width: 90%;
  }
`;

export const TotalOrganization = styled.div`
  color: white;
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`

export const TotalOrganizationText = styled.div`
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  text-shadow: 1px 1px 1px gray;
  color: #6f4283;
  margin: auto;
  box-shadow: 0 2px 2px black;
  background: #EBF8E7;
`


export const Content = styled.div`
  background: white;
  opacity: 0.8;
  margin: 10px auto 10px auto;
  width: 30%;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 3px 3px 0px black;
  text-shadow:  1px 0px 1px gray;
  @media (max-width:768px){
    width: 90%;
    flex-direction: column;
  }
`;
export const ConTitle = styled.h2`
  text-align: center;
  margin: auto;
  font-size: 20px;
  width: 80%;
  color: purple;
`;

export const ContentBody = styled.div`
  width: 100%;
  text-align: center;
  font-size: 15px;
  margin: auto;
  padding: 5px;
  color: black;
`;
export const ContentBodyAddress = styled.div``;
export const ContentBodyPhone = styled.div``;
export const ContentBodyEmail = styled.div``;
export const ContentBodyWebsite = styled.div``;
