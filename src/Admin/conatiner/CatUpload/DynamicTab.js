// import React, { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// const DynamicTabsComponent = () => {
//     const [tabIndex, setTabIndex] = useState(0);
//     const [tabData, setTabData] = useState({});

//     const file = ['files', 'files']

//     // Example: Dynamically generated tabs
//     const tabs = [];

//     // { label: 'Tab 1', id: 'tab1' },
//     // { label: 'Tab 2', id: 'tab2' },
//     // Add more tabs as needed

//     {
//         file.map((v,i) => {
//             tabs.push({ label: `Tab ${i + 1}`, id: `tab${i + 1}` })
//         })
//     }

//     const handleTabChange = (event, newValue) => {
//         setTabIndex(newValue);
//     };

//     const handleTabDataChange = (tabId, newData) => {
//         setTabData((prevData) => ({
//             ...prevData,
//             [tabId]: newData,
//         }));
//     };
//     console.log(tabData);
//     return (
//         <div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <Tabs value={tabIndex} onChange={handleTabChange}>
//                 {tabs.map((tab, index) => (
//                     <Tab key={index} label={tab.label} />
//                 ))}
//             </Tabs>

//             {/* Render content based on the selected tab */}
//             {tabs.map((tab, index) => (
//                 <TabContent
//                     key={index}
//                     data={tabData[tab.id] || { name: '', number: '' }}
//                     setData={(newData) => handleTabDataChange(tab.id, newData)}
//                     isSelected={tabIndex === index}
//                 />
//             ))}
//         </div>
//     );
// };

// const TabContent = ({ data, setData, isSelected }) => {
//     // Your tab content here
//     return (
//         <div style={{ display: isSelected ? 'block' : 'none' }}>
//             <input
//                 type="text"
//                 value={data.name}
//                 onChange={(e) => setData({ ...data, name: e.target.value })}
//             />
//             <input
//                 type="text"
//                 value={data.number}
//                 onChange={(e) => { setData({ ...data, number: e.target.value }) }}
//             />
//         </div>
//     );
// };

// export default DynamicTabsComponent;

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function DynamicTabsComponent() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <label>Username</label>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <>
            <input type="text" {...field} />
            {errors && errors.username && <p>{errors.username.message}</p>}
          </>
        )}
      />

      <label>Email</label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <input type="text" {...field} />
            {errors && errors.email && <p>{errors.email.message}</p>}
          </>
        )}
      />

      <label>Password</label>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <input type="password" {...field} />
            {errors && errors.password && <p>{errors.password.message}</p>}
          </>
        )}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicTabsComponent;







// import React, { useState, useEffect } from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';

// const DynamicTabsComponent = () => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [tabData, setTabData] = useState({});
//   const [tabValidationSchemas, setTabValidationSchemas] = useState({});

//   // Example: For demonstration purposes, let's assume you have a list of dynamic tabs
//   const dynamicTabs = ['tab1', 'tab2', 'tab3'];

//   // Example validation schemas for each tab
//   const tabValidationSchemasInitial = {
//     tab1: yup.object({
//       product_name: yup.string().required('Product name is required in tab1'),
//       // Add more validations for other fields in tab1
//     }),
//     tab2: yup.object({
//       product_name: yup.string().required('Product name is required in tab2'),
//       // Add more validations for other fields in tab2
//     }),
//     tab3: yup.object({
//       product_name: yup.string().required('Product name is required in tab3'),
//       // Add more validations for other fields in tab3
//     }),
//   };

//   useEffect(() => {
//     setTabValidationSchemas(tabValidationSchemasInitial);
//   }, []);

//   const handleTabChange = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const handleInputChange = (fieldName, value) => {
//     setTabData((prevData) => ({
//       ...prevData,
//       [activeTab]: {
//         ...prevData[activeTab],
//         [fieldName]: value,
//       },
//     }));
//   };

//   const formik = useFormik({
//     initialValues: tabData[activeTab] || {},
//     validationSchema: tabValidationSchemas[activeTab] || yup.object(),
//     onSubmit: (values) => {
//       // Handle form submission for the active tab
//       console.log(`Form submitted for ${activeTab}`, values);
//     },
//   });

//   return (
//     <div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//       <div>
//         {dynamicTabs.map((tabId) => (
//           <button key={tabId} onClick={() => handleTabChange(tabId)}>
//             {`Tab ${tabId}`}
//           </button>
//         ))}
//       </div>

//       {activeTab && (
//         <div>
//           <h3>{`Active Tab: ${activeTab}`}</h3>
//           <form onSubmit={formik.handleSubmit}>
//             <input
//               type="text"
//               name="product_name"
//               value={formik.values.product_name || ''}
//               onChange={(e) => {
//                 formik.handleChange(e);
//                 handleInputChange('product_name', e.target.value);
//               }}
//             />
//             {/* Add more input fields for other data fields as needed */}
//             {formik.errors.product_name && formik.touched.product_name && (
//               <div>{formik.errors.product_name}</div>
//             )}
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DynamicTabsComponent;
