import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Center,
} from "@chakra-ui/react";

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
          <Tab
            key={Math.random().toString()}
            onClick={() => {
              localStorage.setItem("currentTab", tab);
            }}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      <Center>
        <TabPanels>
          {tabPanels.map((panel: React.ReactElement) => (
            <TabPanel key={Math.random().toString()}>{panel}</TabPanel>
          ))}
        </TabPanels>
      </Center>
    </Tabs>
  );
};
