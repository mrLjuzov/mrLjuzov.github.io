import React, { useState, useEffect } from 'react';
import './UserInputScreen.css'; 
import { useDarkLightMode } from './DarkLightMode.jsx'; 
import loadLogoLight from '/src/assets/IPAppLogoLightMode.png';
import loadLogoDark from '/src/assets/IPAppLogoDarkMode.png';

function UserInputScreen({ show, items, setItems, onBeginVote }) {
  const darkMode = useDarkLightMode();
  const [isVisible, setIsVisible] = useState(show);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsVisible(show); // Update visibility based on props
  }, [show]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItemFromTextarea = () => {
    // Split inputValue on new lines and filter out empty lines
    const lines = inputValue.split(/\r?\n/).filter(line => line.trim() !== '');

    // Add each line to items state
    const newItems = lines.flatMap(line => line.trim().split(/\s+/));
    setItems(prevItems => [...prevItems, ...newItems]);

    setInputValue(''); // Clear input field
  };

  const clearItems = () => {
    setItems([]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleBeginVote = () => {
    if (items.length < 2) {
      setErrorMessage('Please add at least 2 items.');
      setTimeout(() => {
        setErrorMessage('');
      }, 1000);
    } else {
      onBeginVote();
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`user-input-screen ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {errorMessage && <div className="overlay"></div>} {/* Blur effect overlay when errorMessage is present */}
      <img src={darkMode ? loadLogoDark : loadLogoLight} alt="Logo" id="Logo" />
      <p className="uis-info-text">Input your desired items, names, foods, etc.</p>
      <div>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Input items, each on a new line"
          className="uis-input-box"
        />
      </div>
      <div className="uis-items-container">
        <div className={`uis-items-list ${darkMode ? 'dark-mode-text' : 'light-mode-text'}`}>
          {items.map((item, index) => (
            <div key={index} className="uis-item">
              <span>{item}</span>
              <button onClick={() => removeItem(index)} className="uis-remove-button">
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="clear-items-button" onClick={clearItems}>Clear Items</button>
      <button className="add-items-button" onClick={addItemFromTextarea}>Add Items</button>
      <button className="go-vote-button" onClick={handleBeginVote}>Begin Vote</button>
    </div>
  );
}

export default UserInputScreen;
