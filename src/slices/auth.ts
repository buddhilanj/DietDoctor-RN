import {postAutoAuthentication} from '@app/services/authentication';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface TokenInfo {
  token: string;
}

export const authenticateAutoToken = createAsyncThunk(
  'auth/autoAuthentication',
  // if you type your function argument here
  async () => {
    const response = await postAutoAuthentication();
    return response?.data as TokenInfo;
  },
);

interface AuthState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  token: string | null;
}

const initialState = {
  loading: 'idle',
  token: null,
} as AuthState;

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  /* eslint-disable no-param-reassign */
  extraReducers: builder => {
    builder.addCase(authenticateAutoToken.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(authenticateAutoToken.rejected, state => {
      state.loading = 'failed';
    });
    builder.addCase(authenticateAutoToken.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.token = action.payload.token;
    });
  },
  /* eslint-enable no-param-reassign */
});

export default authSlice.reducer;
