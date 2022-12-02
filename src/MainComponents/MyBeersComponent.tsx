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

  const myBeersElement: React.ReactElement = (
    <>
      <CardComponent beers={myBeers} triggeringComponent={"myBeers"} />
    </>
  );

  return (
    <>
      {myBeersElement}
      <AddBeerComponent />
    </>
  );
};
