import React from 'react';
import './AccordPreview.css';

const AccordPreview = ({ accord }) => {
  const { title, description, notes, image } = accord;
  
  return (
    <div className="accord-preview">
      <div className="preview-image">
        <img src={image} alt={title} />
      </div>
      <div className="preview-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="preview-notes">
          {notes.map((note, index) => (
            <div key={index} className={`preview-note ${note.type}-note`}>
              <span className="note-name">{note.name}</span>
              <span className="note-type">{note.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordPreview;