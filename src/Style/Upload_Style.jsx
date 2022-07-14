import styled from "styled-components";

export const Upload_Style = styled.div`
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
  textarea {
    border-radius: 12px;
    border: none;
    box-shadow: 0px 0px 5px #a5a6a7;
    width: 50%;
  }
`;
