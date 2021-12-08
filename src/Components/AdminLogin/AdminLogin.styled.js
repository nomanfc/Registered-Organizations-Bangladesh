import styled from "@emotion/styled";

export const Container = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 15px;
  background: #8dc642;
`;

export const LoginContainer = styled.div`
  height: 400px;
  width: 30%;
  border-radius: 15px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top:0;
  display: flex;
  align-items: center;
  alignitems: center;
  background: white;
  opacity: 0.9;
  
  box-shadow: 0 0 5px;

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 15px;
  }
`;

export const LoginArea = styled.div`
  height: 90%;
  width: 80%;
  margin: auto;
`