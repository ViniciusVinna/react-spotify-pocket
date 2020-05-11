import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsPauseFill,
  BsPlayFill,
} from 'react-icons/bs';
import Ink from 'react-ink';

import { removeTrackToPlayer, setPlayerHeight } from '../../actions';
import { usePrevious } from '../../modules/custom-hooks';

import './Player.scss';

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const playingNowId = useSelector(state => state.content.playingNowId);
  const playingNowTrack = useSelector(state => state.content.playingNowTrack);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBarWidth, setProgressBarWidth] = useState('0%');
  const prevPlayingNowId = usePrevious(playingNowId);
  const audioElementRef = useRef(null);
  const playerRef = useRef(null);
  const playerHeight = playerRef?.current?.offsetHeight || 0;

  const togglePlayPause = () => {
    const audioPlayer = audioElementRef.current;

    if (isPlaying && !audioPlayer.paused) {
      setIsPlaying(false);
    }
    else if (!isPlaying && audioPlayer.paused) {
      setIsPlaying(true);
    }
  }

  const handleTimeUpdate = () => {
    const audioPlayer = audioElementRef.current;
    const width = Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%';

    setProgressBarWidth(width);
  }

  const handleOnEnded = () => {
    dispatch(removeTrackToPlayer());
  }

  useEffect(() => {
    if (playingNowId === prevPlayingNowId) {
      return;
    }

    setCurrentTrack(playingNowTrack);
  }, [playingNowId, prevPlayingNowId, playingNowTrack]);

  useEffect(() => {
    const audioPlayer = audioElementRef.current;

    if (prevPlayingNowId === playingNowId) {
      if (isPlaying && audioPlayer?.paused) {
        audioPlayer.play();
      }

      if (!isPlaying && !audioPlayer?.paused) {
        audioPlayer.pause();
      }
    }
    else {
      setIsPlaying(true);
    }
  }, [isPlaying, playingNowId, prevPlayingNowId]);

  useEffect(() => {
    if (playerHeight > 0) {
      dispatch(setPlayerHeight(playerHeight))
    }
  }, [isPlaying, dispatch, playerHeight])

  return (
    <div
      ref={playerRef}
      className={`player ${currentTrack ? 'is-playing' : ''}`}
      data-testid="player"
    >
      {currentTrack && (
        <div className="player__wrapper">
          <div className="player__progress-bar">
            <div
              className="player__progress-bar__stroke"
              style={{width: `${progressBarWidth}`}}
            />
          </div>

          <div className="container">
            <figure
              className="player__album-cover"
              style={{ backgroundImage: `url(${currentTrack.album?.images[1]?.url || ''})` }}
            />

            <div className="player__status">
              <div className="player__artist">
                <span className="player__music">
                  {currentTrack.name}
                </span>

                <span className="player__artists">
                  {currentTrack.artists && currentTrack.artists.map(({ name }) => name).join(', ')}
                </span>

                <div className={`player__status__current ${isPlaying ? 'is-playing' : ''}`}>
                  <span>Pausado</span>
                  <span>Reproduzindo</span>
                </div>
              </div>
            </div>

            <div
              className="player__controls"
              onClick={togglePlayPause}
            >
              <div className={`player__control ${!isPlaying ? 'is-paused' : ''}`}>
                {!isPlaying
                  ? (<BsPlayFill />)
                  : (<BsPauseFill />)
                }
                <Ink />
              </div>
            </div>
          </div>

          <audio
            ref={audioElementRef}
            autoPlay
            onEnded={handleOnEnded}
            onTimeUpdate={handleTimeUpdate}
            preload="metadata"
            src={currentTrack.preview_url}
          />
        </div>
      )}
    </div>
  );
};

export default Player;
