import { createReducer } from '@reduxjs/toolkit';
import { fetchRequestsError, fetchRequestsStart } from '../requests/actions';
import { toggleButtonStatus } from './actions';

const initialState = {
  showSpinner: false,
  showErrorToast: false,
  showButton: true,
};
const reducer = createReducer(initialState, {
  [fetchRequestsError]: (state, action) => ({ ...state, showErrorToast: true, showSpinner: false }),
  [fetchRequestsStart]: (state, action) => ({ ...state, showSpinner: true, showErrorToast: false }),
  [toggleButtonStatus]: (state, action) => ({ ...state, showButton: !state.showButton }),
});

export default reducer;
