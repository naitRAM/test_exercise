import React, { useContext } from 'react';
import Card from './Card';
import "./CardContainer.css"
import FilterContext from '../context/FilterContext';

function CardContainer({ links, onEdit, onDelete }) {
    const { filter } = useContext(FilterContext);

    const filteredLinks = links.filter((link) => {
        if (filter === 'All') return true;
        if (filter === 'Grouped' && link.isGrouped) return true;
        if (filter === 'Ungrouped' && !link.isGrouped) return true;
        return false;
    });

    return (
        <div className="card-container">
            {filteredLinks.map((link, index) => (
                <Card
                    key={index}
                    title={link.title}
                    description={link.description}
                    link={link.link}
                    isGrouped={link.isGrouped}
                    onEdit={() => onEdit(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    );
}

export default CardContainer;