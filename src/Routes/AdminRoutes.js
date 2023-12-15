import React from 'react';
import Auth from '../admin/container/Auth/Auth';

function AdminRoutes(props) {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/admin/auth" element={<Auth />} />
                </Route>
            </Routes>

        </>
    );
}

export default AdminRoutes;