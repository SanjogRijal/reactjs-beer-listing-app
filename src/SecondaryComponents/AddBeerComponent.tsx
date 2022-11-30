import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { AddBeerForm } from "./AddBeerForm";
import { BeerModal } from "./BeerModal";

export const AddBeerComponent: React.FC = (): ReactJSXElement => {
  return <BeerModal modalBodyContent={<AddBeerForm></AddBeerForm>} />;
};
