import { AllBeersComponent } from "../MainComponents/AllBeersComponent";
import { MyBeersComponent } from "../MainComponents/MyBeersComponent";
import { TabsComponent } from "../MainComponents/TabsComponent";
import { AddBeerForm } from "../SecondaryComponents/AddBeerForm";
import { BeerModal } from "../SecondaryComponents/BeerModal";
export const ContainerComponent: React.FC = () => {
  return (
    <>
      <TabsComponent
        tabLists={["All Beers", "My Beers"]}
        tabPanels={[<AllBeersComponent />, <MyBeersComponent />]}
      />
      <BeerModal modalBodyContent={<AddBeerForm/>} />
    </>
  );
};
