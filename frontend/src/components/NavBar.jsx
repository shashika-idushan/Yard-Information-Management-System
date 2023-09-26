import React, { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import '../styles/navbar.css';

function NavBar() {
    return (
        <div className="col-lg-2 side-nav d-flex flex-column justify-content-center align-items-center" style={{ height: '100%',margin:'0%' }}>
            <nav className="nav flex-column ">
                <NavLink exact to="/customer" className="nav-link main-nav-link" activeClassName="active-link">Customer</NavLink>
                <NavLink exact to="/itemOrder" className="nav-link main-nav-link" activeClassName="active-link">Item Order</NavLink>
                <NavLink exact to="/repairOrder" className="nav-link main-nav-link" activeClassName="active-link">Repair Order</NavLink>
                <NavLink exact to="/productSelectionn" className="nav-link main-nav-link " activeClassName="active-link">Product Selection</NavLink>
                <NavLink exact to="/supplierSelection" className="nav-link main-nav-link" activeClassName="active-link">Supplier Selection</NavLink>
                <NavLink exact to="/technicianSelection" className="nav-link main-nav-link" activeClassName="active-link">Technician Selection</NavLink>
                <NavLink exact to="/invoices" className="nav-link main-nav-link" activeClassName="active-link">Invoices</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;