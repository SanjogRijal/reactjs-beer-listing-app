import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text, Link, Stack, Center } from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
import BeerHandlers from "../dbHandler/beerHandlers";
import { AddBeerComponent } from "../SecondaryComponents/AddBeerComponent";
import CardComponent from "./CardComponent";

export const MyBeersComponent = () => {
  const [myBeers, setMyBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMyBeers();
  }, [page]);

  const getMyBeers = async () => {
    const currentPage: string = page.toString();
    let beerHandler = new BeerHandlers("http://localhost", "3004", currentPage);
    let beerLists: SetStateAction<any> = await beerHandler.getBeer();
    setMyBeers(myBeers.concat(beerLists.data));
  };
  const changePage = () => {
    setPage((p) => p + 1);
    getMyBeers();
  };

  const myBeersElement: React.ReactElement =
    myBeers.length <= 0 ? (
      <Stack alignItems={"center"} position={"relative"} top="20vh">
        <Center flexDirection={"column"}>
          <Text top={"20px"}>Nothing to see yet</Text>
          <Stack direction={"row"}>
            <Link onClick={() => {}} color={"#5085CA"}>
              Click here
            </Link>
            <Text>to add your first beer!</Text>
          </Stack>
        </Center>
      </Stack>
    ) : (
      <>
        <CardComponent beers={myBeers} triggeringComponent={"myBeers"} />
        <Center>
          <Link
            onClick={() => {
              changePage();
            }}
            color={"#076BC4"}
            position={"relative"}
            top={"20px"}
            marginBottom={"20px"}
          >
            Load More <ChevronDownIcon />
          </Link>
        </Center>
      </>
    );
  return (
    <>
      {myBeersElement}
      <AddBeerComponent />
    </>
  );
};
