import React from 'react';
import { Button } from 'react-bootstrap';
import { BsPencil, BsTrash, BsFolder } from 'react-icons/bs';
import './Card.css';

function Card({ title, description, link, isGrouped, onEdit, onDelete }) {
    return (
        <div className={`card ${isGrouped ? 'grouped' : 'ungrouped'}`}>
            {isGrouped && <BsFolder className="folder-icon" />}
            <div className="card-body">
                <h5>{title}</h5>
                <p>{description}</p>
                {link && <a href={link} target="_blank" rel="noopener noreferrer">Visit Link</a>}
            </div>
            <div className="card-actions">
                <Button variant="light" onClick={onEdit}><BsPencil /></Button>
                <Button variant="light" onClick={onDelete}><BsTrash /></Button>
            </div>
        </div>
    );
}

export default Card;