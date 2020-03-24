import { createReducer } from '@reduxjs/toolkit';
import { fetchRequestsError, fetchRequestsStart } from '../requests/actions';

const initialState = {
  showSpinner: false,
  showErrorToast: false,
};
const reducer = createReducer(initialState, {
  [fetchRequestsError]: (state, action) => ({ ...state, showErrorToast: true, showSpinner: false }),
  [fetchRequestsStart]: (state, action) => ({ ...state, showSpinner: true, showErrorToast: false }),
});

export default reducer;
