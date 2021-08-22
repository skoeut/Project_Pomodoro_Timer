
import React from 'react'
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function ProgressBar({session, focusDuration, breakDuration, isTimeRunning}) {

  const start = session?.label === "Focusing" ? focusDuration * 60 : breakDuration * 60;
  const percentage = 100 * (1 -session?.timeRemaining / start);
  
    return (
     session &&
    <div>
        <div className="row mb-2">
        <div className="col">
        {/** TODO: Update message below to include current session (Focusing or On Break) total duration */}
        <h2 data-testid="session-title">
        {session.label} for {minutesToDuration(session.label === 'On Break' ? breakDuration : focusDuration)} minutes
        </h2>
        {/* TODO: Update message below correctly format the time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
        </p>
        <h1> {!isTimeRunning ? 'PAUSED' : null}</h1>
        </div>
        </div>
        <div className="row mb-2">
        <div className="col">
        <div className="progress" style={{ height: "20px" }}>
            <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={percentage} // TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: `${percentage}%` }} // TODO: Increase width % as elapsed time increases
            />
        </div>
        </div>
        </div>
    </div>
    )
}

export default ProgressBar