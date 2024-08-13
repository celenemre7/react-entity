import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

export const contactSelector = contactAdaptor.getSelectors((state) => state.contacts)

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany
    },
})

export const {addContact,addContacts} = contactSlice.actions
export default contactSlice.reducer 