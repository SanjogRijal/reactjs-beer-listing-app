import { Container, Link, Text } from "@chakra-ui/react";

export const NoContent = () => {
  const linkClicked = () => {
    console.log("New Beer Add Link Clicked");
  };

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
