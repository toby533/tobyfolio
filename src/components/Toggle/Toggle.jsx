import React from 'react'
import { func, string } from 'prop-types';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <div className="toggle-btn" onClick={toggleTheme} >
      <div className="change-color"></div>
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;