import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabDesign = () => {
    return (
        <div>
          <Tabs>
    <TabList>
      <Tab><img src="/public/images (1).jpg" alt="" /></Tab>
      <Tab><img src="/public/images.jpg" alt="" /></Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TabDesign;