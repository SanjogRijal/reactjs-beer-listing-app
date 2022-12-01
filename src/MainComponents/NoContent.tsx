import { Link, Text } from "@chakra-ui/react";

export const NoContent = () => {
  return (
    <>
      <Text>Nothing to see yet</Text>
      <Text>
        <Link
          onClick={() => {
            console.log("ITS CLICKED");
          }}
        >
          Click Here
        </Link>
      </Text>
    </>
  );
};
