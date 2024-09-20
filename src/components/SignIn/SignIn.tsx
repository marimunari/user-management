// system
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// services
import { login } from "../../services/api";

// internal components
import Input from "../Input/Input";
import Button from "../Button/Button";

// styles
import { SignInContainer } from "./SignIn.styles";
import Notification from "../Notification/Notification";

interface Props {
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
}

function SignIn(props: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });

      props.setAccessToken(response.data.data.access_token);
      props.setRefreshToken(response.data.data.refresh_token);

      localStorage.setItem("access_token", response.data.data.token);
      localStorage.setItem("refresh_token", response.data.data.refresh_token);

      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 404) {
          setError("Usuário não encontrado.");
        } else if (error.response.status === 401) {
          setError("Credenciais inválidas.");
        } else {
          setError("Ocorreu um erro ao tentar fazer login.");
        }
      }

      setShowNotification(true);
    }
  };

  return (
    <SignInContainer>
      {showNotification && (
        <Notification
          message={error}
          type="error"
          onClose={() => setShowNotification(false)}
        />
      )}
      <h2>Entrar na sua conta</h2>
      <p>Preencha seus dados</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required={true}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          required={true}
        />
        <Button type="submit" description="ENTRAR" />
      </form>
    </SignInContainer>
  );
}

export default SignIn;
