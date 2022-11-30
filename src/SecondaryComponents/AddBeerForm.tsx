import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";


export const AddBeerForm: React.FC = (): ReactJSXElement => {
  let form = (
    <Grid templateAreas={"repeat(2,2fr)"}>
      <GridItem colSpan={2}>
        <form>
          <FormControl>
            <FormLabel>Enter Beername</FormLabel>
            <Input placeholder="Beer name*" />
          </FormControl>
          <FormControl>
            <FormLabel>Genre</FormLabel>
            <Input placeholder="Genre*" />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input placeholder="Description*" />
          </FormControl>

          <Button left={"8vw"} top={"10px"}>
            Submit
          </Button>
        </form>
      </GridItem>
    </Grid>
  );
  return <>{form}</>;
};
