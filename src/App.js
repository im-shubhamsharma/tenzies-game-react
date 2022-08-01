import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "./components/Confetti";
import "./App.css";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
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
  }

  function holdDice(id) {
    // console.log(id);
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  function newGame() {
    setDice(allNewDice());
    setTenzies(false);
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
      {tenzies && <Confetti />}
      <Header />
      <div className="dice--container">{diceElement}</div>
      <button onClick={tenzies ? newGame : rollDice} className="roll--dice">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
