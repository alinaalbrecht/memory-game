import React, { useState, useEffect, useCallback } from "react";
import { Score } from "./Components/Score";
import { GameBoard } from "./Components/GameBoard";
import { PassFail } from "./Components/PassFail";
import uniqid from "uniqid";
import "./App.scss";

const presidents = [
  {
    name: "George Washington",
    img: "images/List-of-presidents-of-the-United-States/George-Washington.jpg",
    id: uniqid(),
  },
  {
    name: "John Adams",
    img: "images/List-of-presidents-of-the-United-States/John-Adams.jpg",
    id: uniqid(),
  },
  {
    name: "Thomas Jefferson",
    img: "images/List-of-presidents-of-the-United-States/Thomas-Jefferson.jpg",
    id: uniqid(),
  },
  {
    name: "James Madison",
    img: "images/List-of-presidents-of-the-United-States/James-Madison.jpg",
    id: uniqid(),
  },
  {
    name: "James Monroe",
    img: "images/List-of-presidents-of-the-United-States/James-Monroe.jpg",
    id: uniqid(),
  },
  {
    name: "John Quincy Adams",
    img: "images/List-of-presidents-of-the-United-States/John-Quincy-Adams.jpg",
    id: uniqid(),
  },
  {
    name: "Andrew Jackson",
    img: "images/List-of-presidents-of-the-United-States/Andrew-Jackson.jpg",
    id: uniqid(),
  },
  {
    name: "Martin Van Buren",
    img: "images/List-of-presidents-of-the-United-States/Martin-Van-Buren.jpg",
    id: uniqid(),
  },
  {
    name: "William Henry Harrison",
    img: "images/List-of-presidents-of-the-United-States/William-Henry-Harrison.jpg",
    id: uniqid(),
  },
  {
    name: "John Tyler",
    img: "images/List-of-presidents-of-the-United-States/John-Tyler.jpg",
    id: uniqid(),
  },
  {
    name: "James K. Polk",
    img: "images/List-of-presidents-of-the-United-States/James-K.-Polk.jpg",
    id: uniqid(),
  },
  {
    name: "Zachary Taylor",
    img: "images/List-of-presidents-of-the-United-States/Zachary-Taylor.jpg",
    id: uniqid(),
  },
  {
    name: "Millard Fillmore",
    img: "images/List-of-presidents-of-the-United-States/Millard-Fillmore.jpg",
    id: uniqid(),
  },
  {
    name: "Franklin Pierce",
    img: "images/List-of-presidents-of-the-United-States/Franklin-Pierce.jpg",
    id: uniqid(),
  },
  {
    name: "James Buchanan",
    img: "images/List-of-presidents-of-the-United-States/James-Buchanan.jpg",
    id: uniqid(),
  },
  {
    name: "Abraham-Lincoln",
    img: "images/List-of-presidents-of-the-United-States/Abraham-Lincoln.jpg",
    id: uniqid(),
  },
  {
    name: "Andrew Johnson",
    img: "images/List-of-presidents-of-the-United-States/Andrew-Johnson.jpg",
    id: uniqid(),
  },
  {
    name: "Ulysses S. Grant",
    img: "images/List-of-presidents-of-the-United-States/Ulysses-S.-Grant.jpg",
    id: uniqid(),
  },
  {
    name: "Rutherford B. Hayes",
    img: "images/List-of-presidents-of-the-United-States/Rutherford-B.-Hayes.jpg",
    id: uniqid(),
  },
  {
    name: "James A. Garfield",
    img: "images/List-of-presidents-of-the-United-States/James-A.-Garfield.jpg",
    id: uniqid(),
  },
  {
    name: "Chester A. Arthur",
    img: "images/List-of-presidents-of-the-United-States/Chester-A.-Arthur.jpg",
    id: uniqid(),
  },
  {
    name: "Grover Cleveland",
    img: "images/List-of-presidents-of-the-United-States/Grover-Cleveland.jpg",
    id: uniqid(),
  },
  {
    name: "Benjamin Harrison",
    img: "images/List-of-presidents-of-the-United-States/Benjamin-Harrison.jpg",
    id: uniqid(),
  },
  {
    name: "William McKinley",
    img: "images/List-of-presidents-of-the-United-States/William-McKinley.jpg",
    id: uniqid(),
  },
  {
    name: "Theodore Roosevelt",
    img: "images/List-of-presidents-of-the-United-States/Theodore-Roosevelt.jpg",
    id: uniqid(),
  },
  {
    name: "William Howard Taft",
    img: "images/List-of-presidents-of-the-United-States/William-Howard-Taft.jpg",
    id: uniqid(),
  },
  {
    name: "Woodrow Wilson",
    img: "images/List-of-presidents-of-the-United-States/Woodrow-Wilson.jpg",
    id: uniqid(),
  },
  {
    name: "Warren G. Harding",
    img: "images/List-of-presidents-of-the-United-States/Warren-G.-Harding.jpg",
    id: uniqid(),
  },
  {
    name: "Calvin Coolidge",
    img: "images/List-of-presidents-of-the-United-States/Calvin-Coolidge.jpg",
    id: uniqid(),
  },
  {
    name: "Herbert Hoover",
    img: "images/List-of-presidents-of-the-United-States/Herbert-Hoover.jpg",
    id: uniqid(),
  },
  {
    name: "Franklin D. Roosevelt",
    img: "images/List-of-presidents-of-the-United-States/Franklin-D.-Roosevelt.jpg",
    id: uniqid(),
  },
  {
    name: "Harry S. Truman",
    img: "images/List-of-presidents-of-the-United-States/Harry-S.-Truman.jpg",
    id: uniqid(),
  },
  {
    name: "Dwight D. Eisenhower",
    img: "images/List-of-presidents-of-the-United-States/Dwight-D.-Eisenhower.jpg",
    id: uniqid(),
  },
  {
    name: "John F. Kennedy",
    img: "images/List-of-presidents-of-the-United-States/John-F.-Kennedy.jpg",
    id: uniqid(),
  },
  {
    name: "Lyndon B. Johnson",
    img: "images/List-of-presidents-of-the-United-States/Lyndon-B.-Johnson.jpg",
    id: uniqid(),
  },
  {
    name: "Richard Nixon",
    img: "images/List-of-presidents-of-the-United-States/Richard-Nixon.jpg",
    id: uniqid(),
  },
  {
    name: "Gerald Ford",
    img: "images/List-of-presidents-of-the-United-States/Gerald-Ford.jpg",
    id: uniqid(),
  },
  {
    name: "Jimmy Carter",
    img: "images/List-of-presidents-of-the-United-States/Jimmy-Carter.jpg",
    id: uniqid(),
  },
  {
    name: "Ronald Reagan",
    img: "images/List-of-presidents-of-the-United-States/Ronald-Reagan.jpg",
    id: uniqid(),
  },
  {
    name: "George H. W. Bush",
    img: "images/List-of-presidents-of-the-United-States/George-H.-W.-Bush.jpg",
    id: uniqid(),
  },
  {
    name: "Bill Clinton",
    img: "images/List-of-presidents-of-the-United-States/Bill-Clinton.jpg",
    id: uniqid(),
  },
  {
    name: "George W. Bush",
    img: "images/List-of-presidents-of-the-United-States/George-W.-Bush.jpeg",
    id: uniqid(),
  },
  {
    name: "Barack Obama",
    img: "images/List-of-presidents-of-the-United-States/Barack-Obama.jpg",
    id: uniqid(),
  },
  {
    name: "Donald Trump",
    img: "images/List-of-presidents-of-the-United-States/Donald-Trump.jpg",
    id: uniqid(),
  },
  {
    name: "Joe Biden",
    img: "images/List-of-presidents-of-the-United-States/Joe-Biden.jpg",
    id: uniqid(),
  },
];

const levels = [
  {
    rounds: 5,
    presidents: 5,
  },
  {
    rounds: 7,
    presidents: 7,
  },
  {
    rounds: 10,
    presidents: 10,
  },
];

const App = () => {
  const [chosenPresidents, setChosenPresidents] = useState([]);
  const [roundPresidents, setRoundPresidents] = useState([]);
  const [levelPresidents, setLevelPresidents] = useState([]);

  const [didPass, setDidPass] = useState("");
  const [didWin, setDidWin] = useState(false);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentRound, setCurrentRound] = useState(1);

  const updateBestScore = useCallback(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [bestScore, currentScore]);

  const generateLevelPresidents = useCallback(() => {
    let randomPresidents = [...presidents];
    for (let i = randomPresidents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomPresidents[i], randomPresidents[j]] = [
        randomPresidents[j],
        randomPresidents[i],
      ];
    }
    const levelIndex = levels[currentLevel - 1].presidents;
    const selection = randomPresidents.slice(0, levelIndex);
    setLevelPresidents(selection);
  }, [currentLevel]);

  const generateGameBoard = useCallback(() => {
    let randomPresidents = [...levelPresidents];
    for (let i = randomPresidents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomPresidents[i], randomPresidents[j]] = [
        randomPresidents[j],
        randomPresidents[i],
      ];
    }
    setRoundPresidents(randomPresidents);
  }, [levelPresidents]);

  const addPresident = (e) => {
    const chosenPres = e.currentTarget.id;
    if (chosenPresidents.includes(chosenPres)) {
      setDidPass(false);
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to ""
        setDidPass("");
      }, 5000);

      return () => {
        clearTimeout(timeId);
      };
    } else {
      const updateChosen = [...chosenPresidents, chosenPres];
      setChosenPresidents(updateChosen);
      setDidPass(true);
    }
  };

  const updateRound = useCallback(() => {
    if (didPass === true) {
      setCurrentRound(currentRound + 1);
    } else {
      setCurrentRound(1);
    }
  }, [chosenPresidents]);

  const updateLevel = useCallback(() => {
    if (
      didPass === true &&
      currentRound === levels[currentLevel - 1].rounds + 1
    ) {
      if (currentLevel === levels.length) {
        setDidWin(true);
      } else {
        setChosenPresidents([]);
        setDidPass("");
        setCurrentRound(1);
        setCurrentLevel(currentLevel + 1);
      }
    }
  }, [currentRound]);

  const resetGame = () => {
    setChosenPresidents([]);
    setRoundPresidents([]);
    setLevelPresidents([]);

    setDidPass("");
    setDidWin(false);

    setCurrentScore(0);

    setCurrentLevel(1);
    setCurrentRound(1);
  };

  // when component mounts generate random presidents selection for level 1
  useEffect(() => {
    window.addEventListener("load", generateLevelPresidents);
  }, []);

  // determine level when current round changes
  useEffect(() => {
    updateLevel();
  }, [currentRound, updateLevel]);

  useEffect(() => {
    generateLevelPresidents();
  }, [currentLevel, generateLevelPresidents]);

  // when president is successfully added or pass/fail changes, update current score and best score
  useEffect(() => {
    updateBestScore();
    setCurrentScore(chosenPresidents.length);
    updateRound();
  }, [chosenPresidents, didPass, didWin, updateBestScore, updateRound]);

  // if player fails reset chosen presidents to empty array (this changes the current score too, because it is based on the length of the chosen pres array)
  useEffect(() => {
    if (didPass) return;
    setChosenPresidents([]);
    setCurrentRound(1);
  }, [didPass]);

  // if new level presidents are generated (at the start of a new level) update gameboard
  useEffect(() => {
    generateGameBoard();
  }, [levelPresidents, generateGameBoard]);

  return (
    <div className="App">
      <h1>U.S. Presidents Memory Game</h1>
      <p>Don't pick the same president twice!</p>
      <p>Level {currentLevel}</p>
      <p>Round {currentRound}</p>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <PassFail didPass={didPass} didWin={didWin} resetGame={resetGame} />
      <GameBoard
        roundPresidents={roundPresidents}
        generateGameBoard={generateGameBoard}
        addPresident={addPresident}
      />
    </div>
  );
};

export default App;
