import { Text, Container, Link, Stack, Center } from "@chakra-ui/react";
import CardComponent from "./CardComponent";

export const MyBeersComponent = () => {
  let myBeers = ["Corona", "Budweiser", "Bahrasinghe"];
  const myBeersElement: React.ReactElement =
    myBeers.length > 0 ? (
      <Stack alignItems={"center"} position={"relative"} top="20vh">
        <Center flexDirection={"column"}>
          <Text top={"20px"}>Nothing to see yet</Text>
          <Stack direction={"row"}>
            <Link
              onClick={() => {
                console.log("Link Clicked");
              }}
              color={"#5085CA"}
            >
              Click here
            </Link>
            <Text>to add your first beer!</Text>
          </Stack>
        </Center>
      </Stack>
    ) : (
      <CardComponent />
    );
  return <>{myBeersElement}</>;
};
