import { configureStore } from '@reduxjs/toolkit';
import countdownModalReducer from '../components/CountdownModal/CountdownSlice';
import errorModalReducer from '../components/ErrorModal/ErrorSlice';
import gameContentModalReducer from '../components/GameContentModal/GameContentSlice';

export const store = configureStore({
  reducer: {
    countdownModal: countdownModalReducer,
    errorModal: errorModalReducer,
    gameContentModal: gameContentModalReducer,
  },
});

export default store;
