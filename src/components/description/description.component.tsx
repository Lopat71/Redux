import React, { useState, useMemo, useCallback } from "react";
import {
  DescriptionWrapper,
  DescriptionText,
  ShowMoreButton,
} from "./description.styles";

const MAX_LENGTH = 150;

interface DescriptionProps {
  text: string;
  maxLength?: number;
}

const Description: React.FC<DescriptionProps> = ({
  text,
  maxLength = MAX_LENGTH,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = useMemo(() => {
    if (text.length > maxLength && !isExpanded) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  }, [text, maxLength, isExpanded]);

  const toggleText = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <DescriptionWrapper>
      <DescriptionText>{truncatedText}</DescriptionText>
      {text.length > maxLength && (
        <ShowMoreButton onClick={toggleText}>
          {isExpanded ? "Hide Details" : "Show Details"}
        </ShowMoreButton>
      )}
    </DescriptionWrapper>
  );
};

export default Description;
