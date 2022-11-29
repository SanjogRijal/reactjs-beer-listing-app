import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";

type TabsComponentProps = {
  tabLists: Array<string>;
  tabPanels: Array<React.ReactElement>;
};

export const TabsComponent: React.FC<TabsComponentProps> = ({
  tabLists,
  tabPanels,
}: TabsComponentProps): React.ReactElement => {
  return (
    <Tabs>
      <TabList>
        {tabLists.map((tab: string) => (
          <Tab>{tab}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabPanels.map((panel: React.ReactElement) => (
          <TabPanel>{panel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
