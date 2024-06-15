import React, { useState } from 'react';
import Footer from './Footer.jsx';
import LoadScreen from './LoadScreen.jsx';
import FavIcon from './FavIcon.jsx';
import UserInputScreen from './UserInputScreen.jsx';
import LjuzovLogo from './LjuzovLogo.jsx';
import VotingScreen from './VotingScreen.jsx';
import ResultsScreen from './ResultsScreen.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showUserInputScreen, setShowUserInputScreen] = useState(true);
  const [showVotingScreen, setShowVotingScreen] = useState(false);
  const [showResultsScreen, setShowResultsScreen] = useState(false);
  const [items, setItems] = useState([]);
  const [comparisons, setComparisons] = useState([]);
  const [results, setResults] = useState({});
  const [currentComparisonIndex, setCurrentComparisonIndex] = useState(0);
  const [totalComparisons, setTotalComparisons] = useState(0);

  const handleLoadFinished = () => {
    setIsLoading(false);
  };

  const handleBeginVote = () => {
    const remainingComparisons = [];
    items.forEach((item1, index1) => {
      items.forEach((item2, index2) => {
        if (index1 < index2) remainingComparisons.push([item1, item2]);
      });
    });
    setComparisons(remainingComparisons.sort(() => Math.random() - 0.5));
    setTotalComparisons(remainingComparisons.length);
    setResults(items.reduce((acc, item) => ({ ...acc, [item]: 0 }), {}));
    setCurrentComparisonIndex(0);
    setShowUserInputScreen(false);
    setShowVotingScreen(true);
  };

  const handleVote = (winner) => {
    setResults((prevResults) => ({
      ...prevResults,
      [winner]: prevResults[winner] + 1,
    }));
    if (currentComparisonIndex < comparisons.length - 1) {
      setCurrentComparisonIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowVotingScreen(false);
      setShowResultsScreen(true);
    }
  };

  const handleStartOver = () => {
    setItems([]);
    setShowResultsScreen(false);
    setShowVotingScreen(false);
    setShowUserInputScreen(true);
  };

  const handleVoteAgain = () => {
    setResults(items.reduce((acc, item) => ({ ...acc, [item]: 0 }), {}));
    setComparisons(comparisons.sort(() => Math.random() - 0.5));
    setCurrentComparisonIndex(0);
    setShowResultsScreen(false);
    setShowVotingScreen(true);
  };

  return (
    <>
      <FavIcon />
      {isLoading && <LoadScreen onLoaded={handleLoadFinished} />}
      {showUserInputScreen && (
        <UserInputScreen
          show={!isLoading && !showVotingScreen}
          items={items}
          setItems={setItems}
          onBeginVote={handleBeginVote}
        />
      )}
      {showVotingScreen && (
        <VotingScreen
          comparison={comparisons[currentComparisonIndex]}
          totalComparisons={totalComparisons}
          currentComparisonIndex={currentComparisonIndex}
          onVote={handleVote}
          onGoBack={() => {
            setShowVotingScreen(false);
            setShowUserInputScreen(true);
          }}
          onStartOver={handleStartOver}
        />
      )}
      {showResultsScreen && (
        <ResultsScreen
          results={results}
          onStartOver={handleStartOver}
          onVoteAgain={handleVoteAgain}
          onGoBack={() => {
            setShowResultsScreen(false);
            setShowUserInputScreen(true);
          }}
        />
      )}
      {!isLoading && <LjuzovLogo />}
      {!isLoading && <Footer />}
    </>
  );
}

export default App;
