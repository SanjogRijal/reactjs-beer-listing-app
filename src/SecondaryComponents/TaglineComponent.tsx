import { Heading } from "@chakra-ui/react";

const TaglineComponent: React.FC<{ tagline: string | undefined }> = (props: {
  tagline: string | undefined;
}) => {
  return (
    <Heading size="sm" color="#E0B96B">
      {props.tagline}
    </Heading>
  );
};

export default TaglineComponent;
