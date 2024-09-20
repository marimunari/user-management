// system
import React from "react";
import { useNavigate } from "react-router-dom";

// internal components
import Button from "../../components/Button/Button";

// styles
import { ErrorContainer, ErrorMessage } from "./Error.styles";

interface Props {
  message: string;
  onRetry: () => void;
}

function Error(props: Props) {
  const navigate = useNavigate();

  const handleHome = () => {
    props.onRetry();
    navigate("/dashboard");
  };

  return (
    <ErrorContainer>
      <h1>Oops! Algo deu errado.</h1>
      <ErrorMessage>{props.message}</ErrorMessage>
      <Button
        type="button"
        description="Voltar para a Tela Inicial"
        onClick={handleHome}
      />
    </ErrorContainer>
  );
}

export default Error;
