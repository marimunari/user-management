// system
import React from "react";

// styles
import { ButtonContainer } from "./Button.styles";

interface Props {
  type: "button" | "submit" | "reset";
  description: string;
  onClick?: () => void;
}

function Button(props: Props) {
  return (
    <ButtonContainer type={props.type} onClick={props.onClick}>
      {props.description}
    </ButtonContainer>
  );
}

export default Button;
