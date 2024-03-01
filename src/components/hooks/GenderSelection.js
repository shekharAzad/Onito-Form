// GenderSelection.js

import React from 'react';
import useInput from './use-input';

const GenderSelection = ({ selectedGender, onGenderChange }) => {
  const handleGenderChange = (e) => {
      onGenderChange(e.target.value);
      console.log('age',e.target.value)
    };

  return (
    <div>
      <label htmlFor='gender'>
        Gender:
        <select value={selectedGender} onSubmit={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
    </div>
  );
};

export default GenderSelection;
