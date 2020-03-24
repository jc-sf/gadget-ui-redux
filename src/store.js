import { configureStore } from '@reduxjs/toolkit';
import requests from './modules/requests/reducer';
import ui from './modules/ui/reducer';

export default configureStore({
  reducer: {
    requests,
    ui,
  },
});
