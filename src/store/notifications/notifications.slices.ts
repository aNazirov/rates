import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  notification: boolean;
  message: string;
}

const initialState: IState = {
  notification: false,
  message: ''
};

export const { actions: notificationsAction, reducer: notificationsReducer } = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<IState>) => ({
      ...state,
      notification: action.payload.notification,
      message: action.payload.message
    }),
  },
});