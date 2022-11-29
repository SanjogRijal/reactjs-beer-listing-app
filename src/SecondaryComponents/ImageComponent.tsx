import { Image } from "@chakra-ui/react";

export const ImageComponent = (props: { imageUrl: string }) => {
  const imageUrl = props.imageUrl;
  return <Image src={imageUrl} alt="Houzz Latte" />;
};
