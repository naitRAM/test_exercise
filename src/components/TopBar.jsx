import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { BsPlusCircle } from 'react-icons/bs';
import './TopBar.css';

function TopBar({ onSortChange }) {
    return (
        <div className="top-bar">
            <InputGroup>
                <Form.Control type="text" placeholder="Search" className="search-bar" />
                <div className="sort-bar">
                    <Form.Select onChange={(e) => onSortChange(e.target.value)}>
                        <option value="a-z">Alphabetical, A-Z</option>
                        <option value="z-a">Alphabetical, Z-A</option>
                        <option value="oldest">Date, Oldest First</option>
                        <option value="newest">Date, Newest First</option>
                    </Form.Select>
                </div>
                <Button variant="link" className="add-icon">
                    <BsPlusCircle />
                </Button>
            </InputGroup>
        </div>
    );
}

export default TopBar;