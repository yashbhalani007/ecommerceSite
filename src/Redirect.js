import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'; // Assuming you are using react-router

function Redirect(props) {
    const [redirect, setRedirect] = useState(false);
    const login = useSelector(state => state.login); // Adjust this based on your Redux state structure
    

    // Use local state to handle redirection

    useEffect(() => {
        // Check the login success flag and set the local state for redirection
        if (login.login) {
            setRedirect(true);
            console.log(login);
            console.log(login.login);
        }
    }, [login]);

    return(
        <>
        { redirect ? <Redirect to={'/admin/'} /> : null}
        {console.log(login)}
        </>
    )
    

    // ... (rest of your component code)
};

export default Redirect;

// import React from 'react';

// function Redirect(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Redirect;
