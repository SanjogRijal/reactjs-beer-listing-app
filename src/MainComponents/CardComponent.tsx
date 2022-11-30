import { Card, CardBody, Stack, Grid } from "@chakra-ui/react";
import { ReactElement, Suspense } from "react";

import { HeadingComponent } from "../SecondaryComponents/HeadingComponent";
import { ImageComponent } from "../SecondaryComponents/ImageComponent";
import { ParagraphComponent } from "../SecondaryComponents/ParagraphComponent";

const CardComponent: React.FC<{ beers: Array<any> }> = (props: {
  beers: Array<any>;
}): React.ReactElement => {
  const beerCards: Array<ReactElement> = props.beers.map(
    (beer: {
      name: string;
      description: string;
      image_url: string;
      ingredients: Array<string>;
    }) => {
      console.log();
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
    </>
  );
};

export default CardComponent;
