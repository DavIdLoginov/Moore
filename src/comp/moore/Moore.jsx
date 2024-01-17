import React from 'react';
import './MooreLogo.css';

const MooreLogo = () => {
  const handleHover = () => {
    document.body.style.transition = 'background-color 0.5s ease-in-out';
    document.body.style.backgroundColor = 'black';

    const logo = document.querySelector('.moore__logo p');
    if (logo) {
      logo.style.color = 'white';
    }
  };

  const handleLeave = () => {
    document.body.style.transition = 'background-color 0.5s ease-in-out';
    document.body.style.backgroundColor = '';

    const logo = document.querySelector('.moore__logo p');
    if (logo) {
      logo.style.color = '';
    }
  };

  return (
    <div className="moore__cont">
      <button
        className="moore__logo"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <p>MOORE</p>
        <p>studio</p>
      </button>
    </div>
  );
};

export default MooreLogo;
