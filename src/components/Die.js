import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

export default function Die({ value, isHeld, holdDice, id }) {
  console.log(value);
  const styles = {
    backgroundColor: isHeld ? "#B17262" : "",
  };

  return (
    //  <div className="die" style={styles} onClick={()=>props.holdDice(props.id)}>
    //     {/* <h1>{props.value}</h1> */}
    // </div>
    <>
      {value === 1 && (
        <div
          style={styles}
          onClick={() => holdDice(id)}
          class="dice first-face"
        >
          <span class="dot"> </span>
        </div>
      )}

      {value === 2 && (
        <div
          style={styles}
          onClick={() => holdDice(id)}
          class="dice second-face"
        >
          <span class="dot"> </span>
          <span class="dot"> </span>
        </div>
      )}

      {value === 3 && (
        <div
          style={styles}
          onClick={() => holdDice(id)}
          class="dice second-face third-face"
        >
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      )}

      {value === 4 && (
        <div
          style={styles}
          onClick={() => holdDice(id)}
          class="fourth-face dice"
        >
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      )}

      {value === 5 && (
        <div
          style={styles}
          onClick={() => holdDice(id)}
          class="fourth-face fifth-face dice"
        >
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

          <div class="column">
            <span class="dot"></span>
          </div>

          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      )}

      {value === 6 && (
        <div
          style={styles}
          onClick={() => holdDice(id)}
          class="sixth-face fourth-face dice"
        >
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      )}
    </>
  );
}
