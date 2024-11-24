import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsGear } from 'react-icons/bs';
import './Sidebar.css'

function Sidebar({ setFilter }) {
    return (
        <nav className="sidebar">
            <div className="sidebar-header">LinkSaver</div>
            <Nav className="flex-column">
                <Nav.Link className="nav-link" href="#" onClick={() => setFilter('All')}>All</Nav.Link>
                <Nav.Link className="nav-link" href="#" onClick={() => setFilter('Ungrouped')}>Ungrouped</Nav.Link>
                <Nav.Link className="nav-link" href="#" onClick={() => setFilter('Grouped')}>Grouped</Nav.Link>
            </Nav>
            <div className="sidebar-footer">
                <a href="#">
                    <BsGear /> Settings
                </a>
            </div>
        </nav>
    );
}

export default Sidebar;