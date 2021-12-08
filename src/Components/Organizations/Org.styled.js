import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: 75px auto 75px auto;
`;

export const RegisterArea = styled.div`
  border-radius: 15px;
  height: fit-content;
  padding-bottom: 20px;
  max-width: 1000px;
  min-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: Space-around;
  margin: auto auto auto auto;
  box-shadow: 0px 0px 5px gray;
  @media (max-width:768px){
    min-width: 95%;
    max-width: 95%;
    height: fit-content;
    flex-direction: column;
    
  }
`;

export const RegisterSubArea = styled.div`
  border-radius: 15px;
  min-height: 450px;
  width: 30%;
  margin: 15px auto auto auto;
  @media (max-width:768px){
    width: 95%;
    min-height: fit-content;
    flex-direction: column;
    margin: 5px auto auto auto;
  }
`;
export const ButtonArea = styled.div`
padding: 10px;
  width: 50%;
  diplay: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:768px){
    height: fit-content;
    width: 100%;
    margin : 15px auto auto auto;
    flex-direction: column;
    
  }
`;
