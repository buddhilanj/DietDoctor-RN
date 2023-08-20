import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import logger from 'redux-logger';
import sample from '@app/slices/default';

const store = configureStore({
  reducer: {
    sample,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
