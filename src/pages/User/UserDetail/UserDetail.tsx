// system
import React, { useState, useEffect } from "react";

// services
import { getUserDetail } from "../../../services/api";

// pages
import Error from "../../Error/Error";

// internal components
import Loading from "../../../components/Loading/Loading";

// styles
import { Wrapper, Container, Info } from "./UserDetail.styles";

interface User {
  id: number;
  name: string;
  email: string;
}

function UserDetail() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  async function getUserDetails() {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Token não encontrado");
        setLoading(false);
        return;
      }

      const response = await getUserDetail(token);
      setUser(response.data.data);
    } catch (err) {
      setError("Falha ao buscar detalhes do usuário");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={() => setError("")} />;
  }

  return (
    <Wrapper>
      <Container>
        <h2>Suas informações</h2>
        <Info>
          <p>
            <strong>ID:</strong> {user?.id}
          </p>
          <p>
            <strong>Nome:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </Info>
      </Container>
    </Wrapper>
  );
}

export default UserDetail;
