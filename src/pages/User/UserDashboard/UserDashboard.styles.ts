import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  a {
    width: 30%;
    padding: 10px 20px;
    background-color: #e1affd;
    border-radius: 50px;
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    align-self: center;
    margin-top: 10px;

    &:hover {
      background-color: #ca8dfd;
    }
  }
`;
