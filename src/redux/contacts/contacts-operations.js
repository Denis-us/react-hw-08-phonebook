import {getContactsAPI, postContactAPI, deleteContactAPI} from '../../services/contacts-api'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getContacts = createAsyncThunk('contacts/fetchContacts',
async (_, {rejectWithValue}) => {
    try {
        const contacts = await getContactsAPI()
        return contacts
    } catch(error) {
        return rejectWithValue
    }
})

export const postContacts = createAsyncThunk('contacts/postContact',
async (contact, {rejectWithValue}) => {
    try {
        const contacts = await postContactAPI(contact)
        return contacts
    } catch(error) {
        return rejectWithValue
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact',
async (id, {rejectWithValue}) => {
    try {
        const contactId = await deleteContactAPI(id)
        return contactId
    } catch(error) {
        return rejectWithValue
    }
})