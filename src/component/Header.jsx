import React, { useState } from 'react';
import axios from 'axios';

const Header = ({ setDetails }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = async () => {
    try {
      const apiKey = 'at_VsCLx0uxTlo8xO79Zfxz9cuGm5o2e';
      let ipAddress = query;

      // If the input field is empty, fetch the user's IP address
      if (!query) {
        const ipResponse = await axios.get('https://api64.ipify.org?format=json');
        ipAddress = ipResponse.data.ip;
        setQuery(ipAddress); // Update the input field with the user's IP address
      }

      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
      const response = await axios.get(url);
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'blue', height: '20rem', marginTop: '2rem', paddingTop: '1rem' }}>
      <h2 style={{ color: 'white' }}>IP ADDRESS TRACKER</h2>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          placeholder="Search for any IP address or Domain"
          style={{ height: '2.5rem', width: '30rem', borderRadius: '0.7rem 0 0 0.7rem', textAlign: 'center' }}
        />
        <button
          onClick={handleClick}
          style={{ height: '2.8rem', width: '3rem', backgroundColor: 'black', borderRadius: '0 0.7rem 0.7rem 0', color: 'white' }}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Header;
