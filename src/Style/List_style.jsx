import styled from "styled-components";

export const List_Style = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5vh;
  margin-bottom: 5vh;
  .lists {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;

    overflow-y: auto;
    overflow-x: hidden;

    flex-shrink: 0;
  }
  span {
    color: orange;
    font-weight: bolder;
  }
  .list {
    margin-top: 1.5vh;
    margin-bottom: 2.5vh;
    width: 90%;
    height: 10vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 5px #dddbdb;
    padding-left: 1.2vw;
    padding-right: 1.2vw;
  }
  .face {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vw;
    height: 90%;
    img {
      width: 70%;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 0.8rem;
    .face {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15vw;
      height: 90%;

      img {
        width: 70%;
      }
    }
  }
`;
