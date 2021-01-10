import React, { useEffect } from 'react';
// toastr
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Logout = () => {

    sessionStorage.clear();

    useEffect(() => {
        toastr.success('Logout Successfully');
        window.location = '/login';
        return () => {            
        }
    }, []);

    return (
        <>
            
        </>
    )
}

export default Logout
