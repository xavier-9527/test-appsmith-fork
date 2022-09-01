import React from "react";
import { ComponentProps } from "widgets/BaseComponent";

function TextTestComponent(props: TextTestComponentProps) {
  const { backgroundColor, text, textColor } = props;
  return (
    <h3
      style={{
        color: textColor,
        backgroundColor,
      }}
    >
      {text}
    </h3>
  );
}

export interface TextTestComponentProps extends ComponentProps {
  text?: string;
  textColor: string;
  backgroundColor?: string;
}

export default TextTestComponent;
