import { Text, Container, Link, Stack } from "@chakra-ui/react";
import { CardComponent } from "./CardComponent";

export const MyBeersComponent = () => {
  let myBeers = ["Corona", "Budweiser", "Bahrasinghe"];
  const myBeersElement: React.ReactElement =
    myBeers.length > 0 ? (
      <Container
        backgroundColor={"#FAFAFA"}
        height={["12vh", "10vh", "50vh"]}
        flexDirection="column"
      >
        <Stack alignItems={"center"} position={"relative"} top="20vh">
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
        </Stack>
      </Container>
    ) : (
      <CardComponent />
    );
  return <>{myBeersElement}</>;
};
