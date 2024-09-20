// system
import React from "react";
import { Link } from "react-router-dom";

// styles
import { Wrapper, Container } from "./UserDashboard.styles";

function UserDashboard() {
  return (
    <Wrapper>
      <Container>
        <h1>Painel do Usuário</h1>
        <p>Bem-vindo ao seu painel!</p>
        <Link to="/user">Ver Detalhes do Usuário</Link>
      </Container>
    </Wrapper>
  );
}

export default UserDashboard;
