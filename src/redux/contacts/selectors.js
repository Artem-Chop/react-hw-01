import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.contactReducer.IsLoading;
export const getFilterValue = state => state.contactReducer.filter;

export const getAllContacts = state => state.contactReducer.contacts;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilterValue],
  (contacts, filter) => {
    const normFiltr = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normFiltr)
    );
  }
);
