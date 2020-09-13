import React, { useState } from 'react';
import { MemeSdk } from '../sdk/MemeSdk';

interface VoteProps {
  countVoteUp?: number;
  flagVoteUp: boolean;
  countVoteDown?: number;
  flagVoteDown: boolean;
  memeId: string;
}

export const Vote = ({ countVoteUp, countVoteDown, flagVoteUp, flagVoteDown, memeId }: VoteProps) => {
  const [stateVoteUp, setStateVoteUp] = useState<number>(countVoteUp || 0);
  const [stateVoteDown, setStateVoteDown] = useState<number>(countVoteDown || 0);
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
    MemeSdk.voteUpMeme(memeId);
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
    MemeSdk.voteDownMeme(memeId);
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
