import React, { ReactNode } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
} from "./modal.styles";

import CloseIcon from "../../assets/icons/cross.svg";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, title, children }) => {
  if (!visible) return null;

  return (
    <ModalOverlay visible={visible} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            {}
            <img src={CloseIcon} width={20} height={20} alt="Close" />
          </CloseButton>
        </ModalHeader>
        <div>{children}</div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
