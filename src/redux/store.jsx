import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
