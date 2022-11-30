import { Card, CardBody, Link, Flex, Stack, Grid } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  MouseEventHandler,
  ReactElement,
  SetStateAction,
  Suspense,
  useEffect,
  useState,
} from "react";
import axios from "axios";

import { HeadingComponent } from "../SecondaryComponents/HeadingComponent";
import { ImageComponent } from "../SecondaryComponents/ImageComponent";
import { ParagraphComponent } from "../SecondaryComponents/ParagraphComponent";
import { REACT_APP_BASE_URL } from "../env";

const CardComponent: React.FC = (): React.ReactElement => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBeers();
  }, [page]);
  const getBeers: Function = async (): Promise<any> => {
    let beerLists: SetStateAction<any> = await axios.get(
      `${REACT_APP_BASE_URL}/beers?page=${page}&per_page=4`
    );
    setBeers(() => beerLists.data);
  };

  const changePage: Function = () => {
    setPage((p) => p + 2);
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
          _hover={{ backgroundColor: "#F3F8FD" }}
          direction={"row"}
          width={["100%", "100%"]}
          overflow="hidden"
          variant="outline"
          height={["100%", "20vh"]}
          textOverflow={"hidden"}
          key={Math.random().toString()}
        >
          <Stack direction={["column", "row"]} padding={"2vh"}>
            <ImageComponent
              imageUrl={beerImage}
              tooltipLabel={ingredients.toString()}
            />

            <Stack>
              <CardBody>
                <Suspense fallback={<>Loading......</>}>
                  <HeadingComponent heading={beerName} />
                  <ParagraphComponent description={beerDescription} />
                </Suspense>
              </CardBody>
            </Stack>
          </Stack>
        </Card>
      );
    }
  );

  return (
    <>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(2,2fr)"]}
        gap={4}
        flexDirection={["column", "column", "row"]}
        flexGrow={"50%"}
      >
        {beerCards}
      </Grid>

      <Link
        left={["10vw", "6vw", "45vw"]}
        onClick={() => {
          changePage();
        }}
        color={"#076BC4"}
        position={"relative"}
        top={"20px"}
      >
        Load More <ChevronDownIcon />
      </Link>
    </>
  );
};

export default CardComponent;
