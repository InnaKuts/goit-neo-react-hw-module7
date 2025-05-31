import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    const filterValue = nameFilter || "";

    return contacts.filter(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
