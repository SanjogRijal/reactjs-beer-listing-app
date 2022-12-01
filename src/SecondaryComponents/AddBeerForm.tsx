import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";
import BeerImage from "./beerImage.png";
import BeerHandlers from "../dbHandler/beerHandlers";

export const AddBeerForm: React.FC = (): ReactJSXElement => {
  const [beername, setBeerName] = useState("");
  const [beergenre, setBeerGenre] = useState("");
  const [beerDescription, setBeerDescription] = useState("");

  const setFormState: Function = (stateName: string, value: string) => {
    switch (stateName) {
      case "name":
        setBeerName(value);
        break;
      case "genre":
        setBeerGenre(value);
        break;
      case "description":
        setBeerDescription(value);
        break;
      default:
        console.log("Unsure about the case!");
        break;
    }
  };

  type BeerType = {
    name: string;
    genre: string;
    description: string;
    image_url: string;
  };

  const insertMyBeer = () => {
    let newBeer: BeerType = {
      name: beername,
      genre: beergenre,
      description: beerDescription,
      image_url: BeerImage,
    };
    new BeerHandlers("http://localhost", "3004")
      .postBeer(newBeer)
      .then(() => {
        console.log("Beer Inserted Successfully");
      })
      .catch((e) => {
        console.log("Error");
      });
    window.location.reload();
  };
  let form = (
    <Grid templateAreas={"repeat(2,2fr)"}>
      <GridItem colSpan={2}>
        <form>
          <FormControl>
            <FormLabel>Enter Beername</FormLabel>
            <Input
              onChange={(e) => setFormState("name", e.target.value)}
              placeholder="Beer name*"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Genre</FormLabel>
            <Input
              placeholder="Genre*"
              onChange={(e) => setFormState("genre", e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Description*"
              onChange={(e) => setFormState("description", e.target.value)}
            />
          </FormControl>

          <Button left={"8vw"} top={"10px"} onClick={() => insertMyBeer()}>
            Submit
          </Button>
        </form>
      </GridItem>
    </Grid>
  );
  return <>{form}</>;
};
