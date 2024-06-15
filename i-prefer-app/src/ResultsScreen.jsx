import React from 'react';
import './ResultsScreen.css';
import { useDarkLightMode } from './DarkLightMode.jsx';
import loadLogoLight from '/src/assets/IPAppLogoLightMode.png';
import loadLogoDark from '/src/assets/IPAppLogoDarkMode.png';

function ResultsScreen({ results, onStartOver, onVoteAgain, onGoBack }) {
  const darkMode = useDarkLightMode();

  const sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

  return (
    <div className={`results-screen ${darkMode ? 'dark-mode dark-mode-text' : 'light-mode light-mode-text'}`}>
      <img src={darkMode ? loadLogoDark : loadLogoLight} alt="Logo" id='Logo' />
      <div className='result-container'>
        <ul>
          {sortedResults.map(([item, votes], index) => (
            <li key={index}>
              {index + 1}. {item} : <span id='num-votes'>{votes}</span> votes
            </li>
          ))}
        </ul>
      </div>
      <p className='rs-text' id='info'>You Prefer:</p>
      <div className="rs-buttons-container">
        <button className="start-over-button" onClick={onStartOver}>Start Over</button>
        <button className="vote-again-button" onClick={onVoteAgain}>Vote Again</button>
        <button className="add-more-items-button" onClick={onGoBack}>Add More Items</button>
      </div>
    </div>
  );
}

export default ResultsScreen;
