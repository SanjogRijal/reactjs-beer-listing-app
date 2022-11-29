import { Text } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type ParagraphComponentProps = {
  description: string;
};

export const ParagraphComponent: React.FC<ParagraphComponentProps> = (
  props: ParagraphComponentProps
): ReactJSXElement => {
  return <Text noOfLines={2}>{props.description}</Text>;
};
