import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CategoryTabs = () => {
    const [toy, setToy]= useState();
    
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(()=>{
        fetch(`http://localhost:5000/categoryToys/${tabIndex}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setToy(data)
        })
    },[])
    
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
      <TabPanel>1</TabPanel>
      <TabPanel>2</TabPanel>
      <TabPanel>dfgfdg</TabPanel>
      <TabPanel>jewel</TabPanel>
      <TabPanel>jewel</TabPanel>
    </Tabs>
            
        </div>
    );
};

export default CategoryTabs;