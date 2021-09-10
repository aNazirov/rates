import { combineReducers } from '@reduxjs/toolkit/dist'
import { currentsReducer } from './currents/currents.slice'
import { notificationsReducer } from './notifications/notifications.slices'

export const rootReducer = combineReducers({
    currents: currentsReducer,
    notifications: notificationsReducer
})
