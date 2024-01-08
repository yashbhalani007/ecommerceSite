import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCatelog from './AddCatelog';



function RenderCatlog(props) {
    const [fileInputs, setFileInputs] = useState([{ id: 1, selectedFile: null }]);
    const [open, setOpen] = React.useState(true);
    const [tabIndex, setTabIndex] = useState(0);
    const [tabData, setTabData] = useState({});
    const [tabs, setTabs] = useState([]);
    let data = localStorage.getItem('addProduct')

    const obj = {
        product_name: '',
        sku: '',
        group_id: '',
        description: '',
        Images: '',
        color:'',
        sizes: '',
        price: '',
        mrp: '',
        stock: '',
        category: '',
        subcategory: '',
        status: '',
        tags: '',
        shipping_type: '',
        attributes: ''
    }

    const handleToggle = () => {
        setOpen(!open);
        let data = []
        let newTabs = []
        fileInputs.map((v, i) => {
            if (v.selectedFile !== null) {
                data.push(v.selectedFile)
                newTabs.push({ label: `Tab ${i + 1}`, id: `tab${i + 1}`, imgFile: v.selectedFile })
                console.log(v.selectedFile);
            }
        })

        setTabs(newTabs)

        localStorage.setItem('tabs', JSON.stringify(newTabs));
        localStorage.setItem('addProduct', data)
    };


    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleTabDataChange = (tabId, newData) => {
        setTabData((prevData) => ({
            ...prevData,
            [tabId]: newData,
        }));
    };

    const handleFileChange = (id) => (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];

        setFileInputs((prevInputs) =>
            prevInputs.map((input) =>
                input.id === id ? { ...input, selectedFile: file } : input
            )
        );

        // Add a new file input when a file is selected
        setFileInputs((prevInputs) => [
            ...prevInputs,
            { id: prevInputs.length + 1, selectedFile: null },
        ]);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    return (
        <>
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
                <TabPanel key={index} value={tabIndex} index={index}>
                    <AddCatelog
                        key={index}
                        data={tabData[tab.id] || obj }
                        setData={(newData) => handleTabDataChange(tab.id, newData)}
                        isSelected={tabIndex === index}
                        imgFile={tab.imgFile}
                    />
                </TabPanel>
            ))}

            <Dialog open={open}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <div className='addProduct'>
                        {fileInputs.map((input) => (
                            <div key={input.id}>
                                <input
                                    type="file"
                                    id={`fileInput${input.id}`}
                                    onChange={handleFileChange(input.id)}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor={`fileInput${input.id}`} className="file-input-label">
                                    {input.selectedFile ? 'Change Image' : 'Choose Image'}
                                </label>

                                {input.selectedFile && (
                                    <div className="image-container" style={{ margin: '0 11px' }}>
                                        <img src={URL.createObjectURL(input.selectedFile)} alt="Selected Image" id='selected-image' />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    {fileInputs.length > 1 ? <Button onClick={() => handleToggle()}>Subscribe</Button> : <Button disabled>Subscribe</Button>}
                </DialogActions>
            </Dialog>
        </>
    );
}

// const TabContent = ({ data, setData, isSelected }) => {
//     // Your tab content here
//     return (
//         <div style={{ display: isSelected ? 'block' : 'none' }}>
//             <input
//                 type="text"
//                 value={data}
//                 onChange={(e) => setData(e.target.value)}
//             />
//         </div>
//     );
// };

export default RenderCatlog;