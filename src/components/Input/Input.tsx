// system
import React from "react";

// styles
import { InputContainer } from "./Input.styles";

interface Props {
  type: string;
  placeholder: string;
  value: any;
  onChange: (e: any) => void;
  required: boolean;
}

function Input(props: Props) {
  return (
    <InputContainer
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
    />
  );
}

export default Input;
