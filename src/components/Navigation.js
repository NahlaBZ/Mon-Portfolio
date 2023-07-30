import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
                <NavLink className="navbar-brand" to='/'><h1 className="fw-bolder text-primary title">Nahla BENZID | Développeuse Web </h1></NavLink>

            </div>
        </nav>
    )

};

export default Navigation;