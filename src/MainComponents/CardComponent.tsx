import { Card, Stack, CardBody, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { HeadingComponent } from "../SecondaryComponents/HeadingComponent";
import { ImageComponent } from "../SecondaryComponents/ImageComponent";
import { ParagraphComponent } from "../SecondaryComponents/ParagraphComponent";
import { REACT_APP_BASE_URL } from "../env";
import axios from "axios";
export const CardComponent: React.FC = (): React.ReactElement => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getBeers();
  }, []);

  const getBeers: any = async (): Promise<any> => {
    setPage(page + 1);
    let beerLists: SetStateAction<any> = await axios.get(
      `${REACT_APP_BASE_URL}/beers?page=${page}&per_page=3`
    );
    setBeers(beerLists.data);
  };

  const beerCards: Array<ReactElement> = beers.map(
    (beer: {
      name: string;
      description: string;
      image_url: string;
      ingredients: Array<string>;
    }) => {
      let beerName: string = beer.name;
      let beerDescription: string = beer.description;
      let beerImage: string = beer.image_url;
      let ingredients: Array<string> = Object.keys(beer.ingredients);
      return (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          height={"20vh"}
          marginTop={"2vh"}
          textOverflow={"hidden"}
          key={Math.random().toString()}
        >
          <Stack direction={"row"} padding={"1vh"}>
            <ImageComponent
              imageUrl={beerImage}
              tooltipLabel={ingredients.toString()}
            />

            <Stack>
              <CardBody _hover={{ backgroundColor: "#F3F8FD" }}>
                <HeadingComponent heading={beerName} />
                <ParagraphComponent description={beerDescription} />
              </CardBody>
            </Stack>
          </Stack>
        </Card>
      );
    }
  );

  return (
    <>
      {beerCards}
      <Link
        marginLeft={"14vw"}
        onClick={getBeers}
        color={"#076BC4"}
        position={"relative"}
        top={"20px"}
      >
        Load More <ChevronDownIcon />
      </Link>
    </>
  );
};
