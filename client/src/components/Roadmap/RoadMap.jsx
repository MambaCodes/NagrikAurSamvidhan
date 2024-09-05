import React from 'react';
import './RoadMap.css'; 

const RoadMap = () => {
  const handleCardClick = (index) => {
    alert(`You clicked on ${index % 2 === 0 ? `Chapter ${index + 1}` : 'Game'}`);
  };

  return (
    <div className="timeline">
      <div className="outer">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(index)} // Handle click on card
            style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickability
          >
            <div className="info">
              <h3 className="title">
                {index % 2 === 0 ? `Chapter ` : `Game`}
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsum
                doloremque similique maxime modi in id velit hic, facere corporis.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
