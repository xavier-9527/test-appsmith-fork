import React from "react";
import styled from "styled-components";
import { Colors } from "constants/Colors";

const TextHighlighter = styled.mark`
  background: ${Colors.GRAY_100};
  height: 100%;
  display: flex;
  align-items: center;
`;

const TextNotHighlighted = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.span`
  height: 100%;
  display: flex;
  align-items: center;

  & mark:first-child {
    padding-left: ${(props) => props.theme.spaces[5]}px;
    margin-left: ${(props) => -props.theme.spaces[5]}px;
  }

  &:first-child {
    padding-left: ${(props) => props.theme.spaces[5]}px;
  }
`;

export type HighlightTextProps = {
  highlight: string;
  text: string;
};

export function HighlightText(props: HighlightTextProps) {
  const { highlight = "", text = "" } = props;
  if (!highlight.trim()) {
    return <span data-testid="t--no-highlight">{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts: string[] = text.split(regex);

  return (
    <TextWrapper>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <TextHighlighter data-testid="t--highlighted-text" key={i}>
            {part}
          </TextHighlighter>
        ) : (
          <TextNotHighlighted data-testid="t--non-highlighted-text" key={i}>
            {part}
          </TextNotHighlighted>
        );
      })}
    </TextWrapper>
  );
}
