import styled from "styled-components";

export const Signup_Style = styled.div`
  display: flex;
  width: 70%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;

  input {
    width: 50%;
    height: 5%;
    border: none;
    box-shadow: 0px 0px 3px #807d7d;
    border-radius: 12px;
  }

  .register,
  .sso {
    width: 50%;
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 0px 3px orange;
    border-radius: 12px;
  }
  .register {
    color: #1874b1;
    border: 2px solid #1874b1;
  }
  .sso {
    color: #ffa500;
    border: 2px solid orange;
  }
`;
