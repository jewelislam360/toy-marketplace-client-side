import React, {  useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Tabtruck from '../TabCat/Tabtruck';
import SportsCar from '../TabCat/SportsCar';
import FireTruck from '../TabCat/FireTruck';
import PoliceCar from '../TabCat/PoliceCar';
import RegularCar from '../TabCat/RegularCar';

const CategoryTabs = () => {
    
    
    const [tabIndex, setTabIndex] = useState(1);

    

   

    
    return (
        <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="text-center py-6 font-bold">
        <Tab>Sports car</Tab>
        <Tab>Truck</Tab>
        <Tab>Regular car</Tab>
        <Tab>Fire truck</Tab>
        <Tab>Police car</Tab>
      </TabList>

      <TabPanel><SportsCar></SportsCar></TabPanel>
      <TabPanel><Tabtruck></Tabtruck></TabPanel>
      <TabPanel><RegularCar></RegularCar></TabPanel>
      <TabPanel><FireTruck></FireTruck></TabPanel>
      <TabPanel><PoliceCar></PoliceCar></TabPanel>
    </Tabs>
            
        </div>
    );

}


export default CategoryTabs;