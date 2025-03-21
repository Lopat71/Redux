import React from "react";
import { CreateButtonStyled } from "./create-button.styles";

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => {
  return <CreateButtonStyled onClick={onClick}>+</CreateButtonStyled>;
};

export default CreateButton;
