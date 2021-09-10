import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    currents: any;
    current: number;
    source: string;
}

const initialState: IState = {
    currents: null,
    current: 0,
    source: 'USD'
};

export const { actions: currentsAction, reducer: currentsReducer } = createSlice({
    name: 'currents',
    initialState,
    reducers: {
        setCurrents: (state, action: PayloadAction<{ currents: any }>) => ({
            ...state,
            currents: action.payload.currents,
        }),
        setCurrent: (state, action: PayloadAction<{ current: number }>) => ({
            ...state,
            current: action.payload.current,
        }),
        setSource: (state, action: PayloadAction<{ source: string }>) => ({
            ...state,
            source: action.payload.source,
        })
    },
});