import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store