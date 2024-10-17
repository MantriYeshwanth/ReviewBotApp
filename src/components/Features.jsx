import { useState } from 'react';
import './Features.css'; 

function Features() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFetch = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search.."
          value={inputValue}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleFetch} className="search-button">
          Fetch
        </button>
      </div>
    </div>
  );
}

export default Features;
