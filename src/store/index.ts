import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import auth from '@app/slices/auth';

const store = configureStore({
  reducer: {
    auth,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
