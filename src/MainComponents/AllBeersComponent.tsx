import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Link } from "@chakra-ui/react";
import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { REACT_APP_BASE_URL } from "../env";
import CardComponent from "./CardComponent";

export const AllBeersComponent = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBeers();
  }, [page]);

  const getBeers: Function = async (): Promise<any> => {
    let beerLists: SetStateAction<any> = await axios.get(
      `${REACT_APP_BASE_URL}/beers?page=${page}&per_page=10`
    );
    setBeers(beers.concat(beerLists.data));
  };

  const changePage = () => {
    setPage((p) => p + 1);
  };

  return (
    <>
      <CardComponent beers={beers} />
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
};
