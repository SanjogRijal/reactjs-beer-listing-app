import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export const AddBeerForm: React.FC = (): ReactJSXElement => {
  let form = (
    <Box>
      <Box textAlign="center">Add New Beer</Box>

      <Box my={4} textAlign="center">
        <form>
          <FormControl>
            <FormLabel></FormLabel>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
  return <h1>Hello From Beer Form</h1>;
};
