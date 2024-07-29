// CountdownSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toggleGameContent, resetGame } from '../GameContentModal/GameContentSlice';
import audioManager from '../../utils/audioManager';

const countdownSlice = createSlice({
  name: 'countdownModal',
  initialState: {
    countdownTime: 3,
    showCountdownModal: false,
    intervalId: null,
  },
  reducers: {
    setCountdownTimeModal: (state, action) => {
      state.countdownTime = action.payload;
    },
    toggleCountdownModal: (state, action) => {
      state.showCountdownModal = action.payload;
      audioManager.playBackgroundSound();

    },
    setIntervalId: (state, action) => {
      state.intervalId = action.payload;
    },
  },
});

export const { setCountdownTimeModal, toggleCountdownModal, setIntervalId } = countdownSlice.actions;

export const startCountdown = () => (dispatch, getState) => {
  const initCountDownTime = 3;

  dispatch(resetGame());
  dispatch(setCountdownTimeModal(initCountDownTime));

  const id = setInterval(() => {
    const { countdownModal } = getState();
    const newTime = countdownModal.countdownTime - 1;
    if (newTime <= 0) {
      clearInterval(id);
      dispatch(setIntervalId(null));
      dispatch(toggleCountdownModal(false));
      dispatch(toggleGameContent(true));
    } else {
      dispatch(setCountdownTimeModal(newTime));
    }
  }, 1000);

  dispatch(setIntervalId(id));
};

export default countdownSlice.reducer;
