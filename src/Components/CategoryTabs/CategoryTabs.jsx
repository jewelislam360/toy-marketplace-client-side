import React, {  useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Tabtruck from '../TabCat/Tabtruck';

const CategoryTabs = () => {
    // const [toy, setToy]= useState();
    
    const [tabIndex, setTabIndex] = useState();

    // useEffect(()=>{
    //     fetch('https://b7a11-toy-marketplace-server-side-jewelislam360.vercel.app/categoryToys/truck')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setToy(data)
    //     })
    // },[])

   

    
    return (
        <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>sports car</Tab>
        <Tab>truck</Tab>
        <Tab>regular car</Tab>
        <Tab>fire truck</Tab>
        <Tab>police car</Tab>
      </TabList>

      <TabPanel>jewel</TabPanel>
      <TabPanel>
       <Tabtruck></Tabtruck>
        
      </TabPanel>
      <TabPanel>jewel</TabPanel>
      <TabPanel>jewel</TabPanel>
      <TabPanel>jewel</TabPanel>
    </Tabs>
            
        </div>
    );

}


export default CategoryTabs;