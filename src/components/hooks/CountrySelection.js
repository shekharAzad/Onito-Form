// CountrySection.js

import React, { useState, useEffect } from 'react';

const CountrySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchCountryOptions = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        const data = await response.json();

        // The API response is an array, so set the options directly
        setCountryOptions(data);
      } catch (error) {
        console.error('Error fetching country options:', error);
      }
    };

    if (searchTerm) {
      fetchCountryOptions();
    } else {
      // Clear the options if the search term is empty
      setCountryOptions([]);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
      console.log('country',e.target.value)
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country.name.same || ''); // Adjust the property based on API response
    setSearchTerm(''); // Clear the search term after selecting a country
    setCountryOptions([]); // Clear the options
  };

  return (
    <div>
      <h4>Country:</h4>

      <label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Start typing..."
        />
      </label>

      {countryOptions.length > 0 && (
        <ul>
          {countryOptions.map((country) => (
            <li key={country.name.common} onSubmit={() => handleSelectCountry(country)}>
              {country.name.common}
              </li>
              
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySection;
