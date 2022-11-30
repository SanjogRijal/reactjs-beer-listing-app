import { Text, Link, Stack, Center } from "@chakra-ui/react";
import { AddBeerComponent } from "../SecondaryComponents/AddBeerComponent";

export const MyBeersComponent = () => {
  const myBeers = [];
  const myBeersElement: React.ReactElement =
    myBeers.length < 0 ? (
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
      <></>
    );
  return (
    <>
      {myBeersElement}
      <AddBeerComponent />
    </>
  );
};
