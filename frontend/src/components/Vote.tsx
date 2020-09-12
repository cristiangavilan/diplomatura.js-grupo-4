import React, { useEffect, useState } from 'react';

interface VoteProps {
  countVoteUp: number;
  flagVoteUp: boolean;
  countVoteDown: number;
  flagVoteDown: boolean;
}

export const Vote = ({ countVoteUp, countVoteDown, flagVoteUp, flagVoteDown }: VoteProps) => {
  const [stateVoteUp, setStateVoteUp] = useState<number>(countVoteUp);
  const [stateVoteDown, setStateVoteDown] = useState<number>(countVoteDown);
  const [stateFlagVoteUp, setStateFlagVoteUp] = useState<boolean>(flagVoteUp);
  const [stateFlagVoteDown, setStateFlagVoteDown] = useState<boolean>(flagVoteDown);

  const handleVoteUp = () => {
    if (stateFlagVoteUp) {
      setStateVoteUp(stateVoteUp - 1);
      setStateFlagVoteUp(false);
    } else {
      if (stateFlagVoteDown) {
        setStateFlagVoteDown(false);
        setStateVoteDown(stateVoteDown - 1);
      }
      setStateVoteUp(stateVoteUp + 1);
      setStateFlagVoteUp(true);
    }
  };

  const handleVoteDown = () => {
    if (stateFlagVoteDown) {
      setStateVoteDown(stateVoteDown - 1);
      setStateFlagVoteDown(false);
    } else {
      if (stateFlagVoteUp) {
        setStateFlagVoteUp(false);
        setStateVoteUp(stateVoteUp - 1);
      }
      setStateVoteDown(stateVoteDown + 1);
      setStateFlagVoteDown(true);
    }
  };

  return (
    <div className="row m-auto p-auto">
      <div className="col">
        <button
          className={stateFlagVoteUp ? 'btn btn-block btn-pink' : 'btn btn-block btn-light'}
          onClick={handleVoteUp}
        >
          <i className="fas fa-thumbs-up"></i> {'('} {stateVoteUp} {')'}
        </button>
      </div>
      <div className="col text-right">
        <button
          className={stateFlagVoteDown ? 'btn btn-block btn-pink' : 'btn btn-block btn-light'}
          onClick={handleVoteDown}
        >
          <i className="fas fa-thumbs-down"></i> {'('} {stateVoteDown} {')'}
        </button>
      </div>
    </div>
  );
};
