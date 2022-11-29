import { CardComponent } from "../MainComponents/CardComponent";
import { TabsComponent } from "../MainComponents/TabsComponent";

export const ContainerComponent: React.FC = () => {
  return (
    <TabsComponent
      tabLists={["All Beers", "My Beers"]}
      tabPanels={[<CardComponent />, <CardComponent />]}
    />
  );
};
