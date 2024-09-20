// system
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// services
import { addUser } from "../../services/api";

// internal components
import Input from "../Input/Input";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";

// styles
import { SignUpContainer } from "./SignUp.styles";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addUser({ name, email, password });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      setError("Usuário já cadastrado.");
      setShowNotification(true);
    }
  };

  return (
    <SignUpContainer>
      {showNotification && (
        <Notification
          message={error}
          type="error"
          onClose={() => setShowNotification(false)}
        />
      )}
      <h2>Crie sua conta</h2>
      <p>Preencha seus dados</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          required={true}
        />
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
        <Button type="submit" description="CADASTRAR" />
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
