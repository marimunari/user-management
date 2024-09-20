// system
import React from "react";
import { Link } from "react-router-dom";

// styles
import { HeaderContainer } from "./Header.styles";

interface Props {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (token: string | null) => void;
}

function Header(props: Props) {
  const handleLogout = () => {
    props.setAccessToken(null);
    props.setRefreshToken(null);

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <HeaderContainer>
      <nav>
        <Link to="/dashboard">Início</Link>
        {props.accessToken && (
          <Link to="/login" onClick={handleLogout}>
            Sair
          </Link>
        )}
      </nav>
    </HeaderContainer>
  );
}

export default Header;
