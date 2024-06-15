import React from 'react';
import './VotingScreen.css';
import { useDarkLightMode } from './DarkLightMode.jsx';
import loadLogoLight from '/src/assets/IPAppLogoLightMode.png';
import loadLogoDark from '/src/assets/IPAppLogoDarkMode.png';

function VotingScreen({ comparison, totalComparisons, currentComparisonIndex, onVote, onGoBack, onStartOver }) {
  const darkMode = useDarkLightMode();

  if (!comparison) return null;

  return (
    <div className={`voting-screen ${darkMode ? 'dark-mode dark-mode-text' : 'light-mode light-mode-text'}`}>
      <img src={darkMode ? loadLogoDark : loadLogoLight} alt="Logo" id='Logo' />
      <div className="voting-button-container">
        <button className="left-vote-button" onClick={() => onVote(comparison[0])}>{comparison[0]}</button>
        <button className="right-vote-button" onClick={() => onVote(comparison[1])}>{comparison[1]}</button>
      </div>
      <p className='vs-text' id='info'>Pick One!</p>
      <p className='vs-text' id='or'>OR</p>
      <p className='vs-text' id='votes-left'>Votes left: <span id='vote-counter'>{totalComparisons - currentComparisonIndex}</span></p>
      <button className="back-button" onClick={onGoBack}>Go Back</button>
      <button className='vs-start-over-button' onClick={onStartOver}>Start Over</button>
    </div>
  );
}

export default VotingScreen;
