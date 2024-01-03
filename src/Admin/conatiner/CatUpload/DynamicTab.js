import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const DynamicTabsComponent = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [tabData, setTabData] = useState({});

    const file = ['files', 'files']

    // Example: Dynamically generated tabs
    const tabs = [];

    // { label: 'Tab 1', id: 'tab1' },
    // { label: 'Tab 2', id: 'tab2' },
    // Add more tabs as needed

    {
        file.map((v,i) => {
            tabs.push({ label: `Tab ${i + 1}`, id: `tab${i + 1}` })
        })
    }

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleTabDataChange = (tabId, newData) => {
        setTabData((prevData) => ({
            ...prevData,
            [tabId]: newData,
        }));
    };
    console.log(tabData);
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Tabs value={tabIndex} onChange={handleTabChange}>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
                ))}
            </Tabs>

            {/* Render content based on the selected tab */}
            {tabs.map((tab, index) => (
                <TabContent
                    key={index}
                    data={tabData[tab.id] || { name: '', number: '' }}
                    setData={(newData) => handleTabDataChange(tab.id, newData)}
                    isSelected={tabIndex === index}
                />
            ))}
        </div>
    );
};

const TabContent = ({ data, setData, isSelected }) => {
    // Your tab content here
    return (
        <div style={{ display: isSelected ? 'block' : 'none' }}>
            <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
                type="text"
                value={data.number}
                onChange={(e) => { setData({ ...data, number: e.target.value }) }}
            />
        </div>
    );
};

export default DynamicTabsComponent;