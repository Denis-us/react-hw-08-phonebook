import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {removeContact} from '../contacts/contactsSlice'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


const getContacts = createAsyncThunk('contacts/getContacts', async (_, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/contacts')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const addContact = createAsyncThunk('contacts/addContacts', async (credentials, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/contacts', credentials)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const deleteContact = createAsyncThunk('contacts/delContacts', async (id, {rejectWithValue, dispatch}) => {
    try {
        await axios.delete(`/contacts/${id}`)
        dispatch(removeContact(id))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const contactsOperations = {getContacts, addContact, deleteContact}

export default contactsOperations