import React from "react";
import { ComponentProps } from "widgets/BaseComponent";

function TextTestComponent(props: TextTestComponentProps) {
  const { text } = props;
  return <h3>{text}</h3>;
}

export interface TextTestComponentProps extends ComponentProps {
  text: string;
}

export default TextTestComponent;
