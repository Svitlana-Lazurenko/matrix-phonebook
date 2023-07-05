import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  contactsArr: [],
  isLoading: false,
  error: null,
  isEditMode: false,
  currentContact: {},
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    turnOnEditMode(state, action) {
      state.isEditMode = true;
      state.currentContact = action.payload;
    },

    turnOffEditMode(state) {
      state.isEditMode = false;
      state.currentContact = {};
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsArr = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsArr.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactsArr.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactsArr.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(changeContact.pending, handlePending)
      .addCase(changeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const currentContact = action.payload;
        const newContacts = state.contactsArr.map(contact =>
          contact.id === currentContact.id
            ? {
                id: contact.id,
                name: currentContact.name,
                number: currentContact.number,
              }
            : contact
        );
        state.contactsArr = newContacts;
      })
      .addCase(changeContact.rejected, handleRejected)

      .addCase(logOut.fulfilled, state => {
        state.contactsArr = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const { turnOnEditMode, turnOffEditMode } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
