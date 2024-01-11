import React from 'react';

const switchStyles = {
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: '5px',
    borderRadius: '20px',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    right: '20px',
    top: '20px',
    overflow: 'hidden',
    transition: 'background-color 0.1s, color 0.1s', // Add transition property
  },
  input: {
    display: 'none',
  },
  slider: {
    position: 'relative',
    display: 'inline-block',
    width: '30px', // Increased width to accommodate the icons
    height: '15px',
    backgroundColor: '#777',
    borderRadius: '15px',
    transition: 'background-color 0.1s', // Add transition property
  },
  sliderChecked: {
    backgroundColor: '#4caf50',
  },
  sliderIcon: {
    position: 'absolute',
    bottom: '-4px',
    width: '23px',
    height: '23px',
    borderRadius: '50%',
    transition: 'transform 0.1s', // Add transition property
    zIndex: '999999',
  },
  sunIcon: {
    left: '-4px',
    backgroundColor: 'white',
  },
  moonIcon: {
    right: '-4px',
    backgroundColor: '#333',
  },
};

const Switch = ({ checked, onChange }) => {
  return (
    <div className='toogle-dm-button'>
      <label style={switchStyles.label}>
        <input type="checkbox" checked={checked} onChange={onChange} style={switchStyles.input} />
        <span
          className="slider"
          style={{
            ...switchStyles.slider,
            ...(checked ? switchStyles.sliderChecked : {}),
          }}
        >
          <span
            style={{
              ...switchStyles.sliderIcon,
              ...switchStyles.moonIcon,
              transform: checked ? 'translateX(-200%)' : 'translateX(0)',
            }}
          >
            <span>☀️</span>
          </span>
          <span
            style={{
              ...switchStyles.sliderIcon,
              ...switchStyles.sunIcon,
              transform: checked ? 'translateX(0)' : 'translateX(200%)',
            }}
          >
            <span>🌙</span>
          </span>
          
        </span>
      </label>
    </div>
  );
};

export default Switch;