import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 8vh;
  background-color: #e1affd;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 10px 20px;
      margin: 0 5px;
      text-decoration: none;
      color: #ffffff;
      font-weight: 700;

      &:hover {
        border-radius: 20px;
        background-color: #ca8dfd;
      }
    }
  }
`;
