import { Heading } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type HeadingComponentProps = {
  heading: string;
};

export const HeadingComponent: React.FC<HeadingComponentProps> = ({
  heading,
}: HeadingComponentProps): ReactJSXElement => {
  return <Heading noOfLines={1}>{heading}</Heading>;
};
