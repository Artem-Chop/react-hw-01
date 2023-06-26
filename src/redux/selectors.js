import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.loading;
export const getFilterValue = state => state.filter;

const getAllContacts = state => state.contacts;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilterValue],
  (contacts, filter) => {
    const normFiltr = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normFiltr)
    );
  }
);
