import React from 'react';
import '/src/components/AccordCard.css';

const AccordCard = ({ accord }) => {
  const { title, description, image, notes } = accord;
  
  return (
    <div className="accord-card">
      <div className="accord-image">
        <img src={image} alt={title} width="100%" />
      </div>
      <div className="accord-content">
        <h3 className="accord-title">{title}</h3>
        <p className="accord-description">{description}</p>
        <div className="accord-notes">
          {notes.map((note, index) => (
            <span 
              key={index} 
              className={`note ${note.type}-note`}
            >
              {note.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordCard;