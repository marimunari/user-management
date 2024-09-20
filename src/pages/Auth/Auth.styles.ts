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
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const WelcomeContainer = styled.div`
  width: 40%;
  height: 80vh;
  background-color: #e1affd;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const ButtonLink = styled.a`
  width: 30%;
  margin-top: 10px;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
`;
