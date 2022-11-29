import { Container, Link, Text } from "@chakra-ui/react";

export const NoContent = () => {

  return (
    <Container>
      <Text>Nothing to see yet</Text>
      <Text>
        <Link
          onClick={() => {
            console.log("Add More Link Clicked");
          }}
        >
          Click Here
        </Link>
      </Text>
    </Container>
  );
};
