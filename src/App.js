import React, { useState, useEffect, useCallback } from "react";
import { Score } from "./Components/Score";
import { GameBoard } from "./Components/GameBoard";
import { PassFail } from "./Components/PassFail";
import "./App.scss";

const presidents = [
  {
    name: "George Washington",
    img: "images/List-of-presidents-of-the-United-States/George-Washington.jpg",
  },
  {
    name: "John Adams",
    img: "images/List-of-presidents-of-the-United-States/John-Adams.jpg",
  },
  {
    name: "Thomas Jefferson",
    img: "images/List-of-presidents-of-the-United-States/Thomas-Jefferson.jpg",
  },
  {
    name: "James Madison",
    img: "images/List-of-presidents-of-the-United-States/James-Madison.jpg",
  },
  {
    name: "James Monroe",
    img: "images/List-of-presidents-of-the-United-States/James-Monroe.jpg",
  },
  {
    name: "John Quincy Adams",
    img: "images/List-of-presidents-of-the-United-States/John-Quincy-Adams.jpg",
  },
  {
    name: "Andrew Jackson",
    img: "images/List-of-presidents-of-the-United-States/Andrew-Jackson.jpg",
  },
  {
    name: "Martin Van Buren",
    img: "images/List-of-presidents-of-the-United-States/Martin-Van-Buren.jpg",
  },
  {
    name: "William Henry Harrison",
    img: "images/List-of-presidents-of-the-United-States/William-Henry-Harrison.jpg",
  },
  {
    name: "John Tyler",
    img: "images/List-of-presidents-of-the-United-States/John-Tyler.jpg",
  },
  {
    name: "James K. Polk",
    img: "images/List-of-presidents-of-the-United-States/James-K.-Polk.jpg",
  },
  {
    name: "Zachary Taylor",
    img: "images/List-of-presidents-of-the-United-States/Zachary-Taylor.jpg",
  },
  {
    name: "Millard Fillmore",
    img: "images/List-of-presidents-of-the-United-States/Millard-Fillmore.jpg",
  },
  {
    name: "Franklin Pierce",
    img: "images/List-of-presidents-of-the-United-States/Franklin-Pierce.jpg",
  },
  {
    name: "James Buchanan",
    img: "images/List-of-presidents-of-the-United-States/James-Buchanan.jpg",
  },
  {
    name: "Abraham-Lincoln",
    img: "images/List-of-presidents-of-the-United-States/Abraham-Lincoln.jpg",
  },
  {
    name: "Andrew Johnson",
    img: "images/List-of-presidents-of-the-United-States/Andrew-Johnson.jpg",
  },
  {
    name: "Ulysses S. Grant",
    img: "images/List-of-presidents-of-the-United-States/Ulysses-S.-Grant.jpg",
  },
  {
    name: "Rutherford B. Hayes",
    img: "images/List-of-presidents-of-the-United-States/Rutherford-B.-Hayes.jpg",
  },
  {
    name: "James A. Garfield",
    img: "images/List-of-presidents-of-the-United-States/James-A.-Garfield.jpg",
  },
  {
    name: "Chester A. Arthur",
    img: "images/List-of-presidents-of-the-United-States/Chester-A.-Arthur.jpg",
  },
  {
    name: "Grover Cleveland",
    img: "images/List-of-presidents-of-the-United-States/Grover-Cleveland.jpg",
  },
  {
    name: "Benjamin Harrison",
    img: "images/List-of-presidents-of-the-United-States/Benjamin-Harrison.jpg",
  },
  {
    name: "William McKinley",
    img: "images/List-of-presidents-of-the-United-States/William-McKinley.jpg",
  },
  {
    name: "Theodore Roosevelt",
    img: "images/List-of-presidents-of-the-United-States/Theodore-Roosevelt.jpg",
  },
  {
    name: "William Howard Taft",
    img: "images/List-of-presidents-of-the-United-States/William-Howard-Taft.jpg",
  },
  {
    name: "Woodrow Wilson",
    img: "images/List-of-presidents-of-the-United-States/Woodrow-Wilson.jpg",
  },
  {
    name: "Warren G. Harding",
    img: "images/List-of-presidents-of-the-United-States/Warren-G.-Harding.jpg",
  },
  {
    name: "Calvin Coolidge",
    img: "images/List-of-presidents-of-the-United-States/Calvin-Coolidge.jpg",
  },
  {
    name: "Herbert Hoover",
    img: "images/List-of-presidents-of-the-United-States/Herbert-Hoover.jpg",
  },
  {
    name: "Franklin D. Roosevelt",
    img: "images/List-of-presidents-of-the-United-States/Franklin-D.-Roosevelt.jpg",
  },
  {
    name: "Harry S. Truman",
    img: "images/List-of-presidents-of-the-United-States/Harry-S.-Truman.jpg",
  },
  {
    name: "Dwight D. Eisenhower",
    img: "images/List-of-presidents-of-the-United-States/Dwight-D.-Eisenhower.jpg",
  },
  {
    name: "John F. Kennedy",
    img: "images/List-of-presidents-of-the-United-States/John-F.-Kennedy.jpg",
  },
  {
    name: "Lyndon B. Johnson",
    img: "images/List-of-presidents-of-the-United-States/Lyndon-B.-Johnson.jpg",
  },
  {
    name: "Richard Nixon",
    img: "images/List-of-presidents-of-the-United-States/Richard-Nixon.jpg",
  },
  {
    name: "Gerald Ford",
    img: "images/List-of-presidents-of-the-United-States/Gerald-Ford.jpg",
  },
  {
    name: "Jimmy Carter",
    img: "images/List-of-presidents-of-the-United-States/Jimmy-Carter.jpg",
  },
  {
    name: "Ronald Reagan",
    img: "images/List-of-presidents-of-the-United-States/Ronald-Reagan.jpg",
  },
  {
    name: "George H. W. Bush",
    img: "images/List-of-presidents-of-the-United-States/George-H.-W.-Bush.jpg",
  },
  {
    name: "Bill Clinton",
    img: "images/List-of-presidents-of-the-United-States/Bill-Clinton.jpg",
  },
  {
    name: "George W. Bush",
    img: "images/List-of-presidents-of-the-United-States/George-W.-Bush.jpeg",
  },
  {
    name: "Barack Obama",
    img: "images/List-of-presidents-of-the-United-States/Barack-Obama.jpg",
  },
  {
    name: "Donald Trump",
    img: "images/List-of-presidents-of-the-United-States/Donald-Trump.jpg",
  },
  {
    name: "Joe Biden",
    img: "images/List-of-presidents-of-the-United-States/Joe-Biden.jpg",
  },
];

const levels = [
  {
    rounds: 5,
    presidents: 5,
  },
  {
    rounds: 10,
    presidents: 6,
  },
  {
    rounds: 20,
    presidents: 10,
  },
];

const App = () => {
  const [chosenPresidents, setChosenPresidents] = useState([]);
  const [roundPresidents, setRoundPresidents] = useState([]);
  const [levelPresidents, setLevelPresidents] = useState([]);

  const [didPass, setDidPass] = useState("");

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentRound, setCurrentRound] = useState(1);

  const updateBestScore = useCallback(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [bestScore, currentScore]);

  const generateLevelPresidents = () => {
    let randomPresidents = [...presidents];
    for (let i = randomPresidents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomPresidents[i], randomPresidents[j]] = [
        randomPresidents[j],
        randomPresidents[i],
      ];
    }
    const levelIndex = levels[currentLevel].presidents;
    const selection = randomPresidents.slice(0, levelIndex);
    console.log(selection);
    setLevelPresidents(selection);
    /* generateGameBoard(); */
  };

  const generateGameBoard = useCallback(() => {
    let randomPresidents = [...levelPresidents];
    for (let i = randomPresidents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomPresidents[i], randomPresidents[j]] = [
        randomPresidents[j],
        randomPresidents[i],
      ];
    }
    console.log(randomPresidents);
    setRoundPresidents(randomPresidents);
  }, [levelPresidents]);

  const addPresident = (e) => {
    console.log(e.currentTarget.id);
    const chosenPres = e.currentTarget.id;
    if (chosenPresidents.includes(chosenPres)) {
      setDidPass(false);
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setDidPass("");
      }, 5000);

      return () => {
        clearTimeout(timeId);
      };
    } else {
      const updateChosen = [...chosenPresidents, chosenPres];
      setChosenPresidents(updateChosen);
      setDidPass(true);
      console.log(updateChosen);
    }
  };

  /* when component mounts generate random presidents gameboard */
  useEffect(() => {
    window.addEventListener("load", generateLevelPresidents);
  }, []);

  useEffect(() => {
    updateBestScore();
    setCurrentScore(chosenPresidents.length);
  }, [chosenPresidents, didPass, updateBestScore]);

  useEffect(() => {
    if (didPass) return;

    setChosenPresidents([]);
  }, [didPass]);

  useEffect(() => {
    generateGameBoard();
  }, [levelPresidents, generateGameBoard]);

  return (
    <div className="App">
      <h1>U.S. Presidents Memory Game</h1>
      <p>Don't pick the same president twice!</p>

      <Score currentScore={currentScore} bestScore={bestScore} />
      <PassFail didPass={didPass} />
      <GameBoard
        roundPresidents={roundPresidents}
        generateGameBoard={generateGameBoard}
        addPresident={addPresident}
      />
    </div>
  );
};

export default App;
