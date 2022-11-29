import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export const AddBeerComponent: React.FC = (): ReactJSXElement => {
  let addForm = <h1>This is form</h1>;
  return <h1>Add Beer Component {addForm}</h1>;
};
