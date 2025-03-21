import React, { useState } from "react";
import { InputStyled } from "./input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  const [innerValue, setInnerValue] = useState(rest.value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
  };

  return (
    <InputStyled
      className={className}
      value={innerValue}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Input;
