import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Die from "./components/Die";
import Confetti from "./components/Confetti";
import Background from "./components/background/Background";
import Timer from "./components/Timer";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState("start");

  const [rollsCount, setRollsCount] = useState(0);

  function tenziesStausToggle() {
    setTenzies((prevState) => {
      if (prevState === "start") return "ongoing";
      if (prevState === "ongoing") return "new game";
      if (prevState === "new game") return "start";
    });
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies("new game");
    }
  }, [dice]);

  function allNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return arr;
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld //conditional operator
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            }
      )
    );
    setRollsCount((prevCount) => prevCount + 1);
  }

  function holdDice(id) {
    // console.log(id);
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  function startGame() {
    tenziesStausToggle();
    rollDice();
  }

  function newGame() {
    setDice(allNewDice());
    tenziesStausToggle();
    setRollsCount(0);
  }

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={holdDice}
    />
  ));

  return (
    <main>
      <Background />
      {tenzies === "new game" && <Confetti />}
      <Header />
      <div className="dice--container">{diceElement}</div>
      <button
        onClick={
          tenzies == "start"
            ? startGame
            : tenzies === "ongoing"
            ? rollDice
            : newGame
        }
        className="roll--dice"
      >
        {tenzies == "start"
          ? "Start"
          : tenzies === "ongoing"
          ? "Roll Dice"
          : "New Game"}
      </button>
      <div className="timerAndCount">
        <p className="count">Count : {rollsCount}</p>
        <Timer state={tenzies} />
      </div>
    </main>
  );
}
