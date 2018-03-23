 import React from 'react';


import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPublic from 'material-ui-icons/Public';
import MapsSecurity from 'material-ui-icons/Security';
import MapsWWork from 'material-ui-icons/Work';
const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<MapsPublic />}
      label="Hệ thống chung"
    >
        Hệ thống chung
    </Tab>
    <Tab
      icon={<MapsSecurity />}
      label="An ninh"
    >
    </Tab>
    <Tab
      icon={<MapsWWork />}
      label="Thống kê Logs"
    >
    </Tab>
  </Tabs>
);

export default TabsExampleIconText;

