// system
import React, { useState } from "react";

// internal components
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

// styles
import {
  Wrapper,
  Container,
  WelcomeContainer,
  ButtonLink,
} from "./Auth.styles";

interface Props {
  setAccessToken: (token: string | null) => void;
  setRefreshToken: (token: string | null) => void;
}

function Auth(props: Props) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Wrapper>
      <Container>
        <WelcomeContainer>
          <h2>{isLogin ? "Bem-vindo de volta!" : "Não possui conta?"}</h2>
          <h3>
            {isLogin
              ? "Acesse sua conta agora mesmo."
              : "Crie sua conta agora mesmo."}
          </h3>
          <ButtonLink onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "ENTRAR" : "CADASTRAR"}
          </ButtonLink>
        </WelcomeContainer>
        {!isLogin ? (
          <SignIn
            setAccessToken={props.setAccessToken}
            setRefreshToken={props.setRefreshToken}
          />
        ) : (
          <SignUp />
        )}
      </Container>
    </Wrapper>
  );
}

export default Auth;
