import { Box, Stack } from "@chakra-ui/react";
import { AllBeersComponent } from "../MainComponents/AllBeersComponent";
import { MyBeersComponent } from "../MainComponents/MyBeersComponent";
import { TabsComponent } from "../MainComponents/TabsComponent";
export const ContainerComponent: React.FC = () => {
  return (
    <Stack>
      <TabsComponent
        tabLists={["All Beers", "My Beers"]}
        tabPanels={[<AllBeersComponent />, <MyBeersComponent />]}
      />
    </Stack>
  );
};
