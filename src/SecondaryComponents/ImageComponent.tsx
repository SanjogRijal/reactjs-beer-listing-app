import { Image, Tooltip } from "@chakra-ui/react";

export const ImageComponent = (props: {
  imageUrl: string;
  tooltipLabel: string | undefined | Array<string>;
}) => {
  const imageUrl = props.imageUrl;
  return (
    <Tooltip label={`ingredients: ${props.tooltipLabel}`} placement="top">
      <Image src={imageUrl} alt="Houzz Latte" />
    </Tooltip>
  );
};
