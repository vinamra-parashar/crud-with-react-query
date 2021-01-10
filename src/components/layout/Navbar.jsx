import React from 'react'
import { Link } from 'react-router-dom';
// toastr
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export default function Navbar() {

    const logout = (e) =>{
        e.preventDefault();
        sessionStorage.clear();
        toastr.success('Logout Successfully');
        window.location = '/login';
    }
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to='/' className="navbar-brand">Home</Link>
                <button className="btn btn-light ml-auto" onClick={(e)=>logout(e)}>Logout</button>
            </div>
        </nav>
    )
}
