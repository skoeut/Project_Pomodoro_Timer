import React from 'react'
import { minutesToDuration } from "../utils/duration";

function Break({setBreakDuration, breakDuration, isTimerRunning}) {
    const clickBreakHandler = (change) => (
        setBreakDuration((currentBreak) => currentBreak + change)
      )

   return (
    <div className="input-group input-group-lg mb-2">
    <span className="input-group-text" data-testid="duration-break">
      {/**  TODO: Update this text to display the current break session duration */}
      Break Duration: {minutesToDuration(breakDuration)}
    </span>
    <div className="input-group-append">
      {/**  TODO: Implement decreasing break duration and disable during a focus or break session*/}
      <button
        disabled={breakDuration <= 1 || isTimerRunning} 
        type="button"
        className="btn btn-secondary"
        data-testid="decrease-break"
        onClick={() => clickBreakHandler(-1)}
      >
        <span className="oi oi-minus" />
      </button>
      {/** TODO: Implement increasing break duration and disable during a focus or break session*/}
      <button
        disabled={breakDuration >= 15 || isTimerRunning}
        type="button"
        className="btn btn-secondary"
        data-testid="increase-break"
        onClick={() => clickBreakHandler(1)}
      >
        <span className="oi oi-plus" />
      </button>
    </div>
  </div>
   )   
}

export default Break