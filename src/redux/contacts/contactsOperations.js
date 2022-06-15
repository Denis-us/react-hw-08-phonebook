import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
// import contactsSlice from '../contacts/contactsSlice'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


const getContacts = createAsyncThunk('contacts/getContacts', async (_, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/contacts')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const addContact = createAsyncThunk('contacts/addContacts', async credentials => {
    try {
        const {data} = await axios.post('/contacts', credentials)
        console.log(data)
        return data
    } catch (error) {

    }
})

const deleteContact = createAsyncThunk('contacts/delContacts', async (id, {rejectWithValue, dispatch}) => {
    try {
        const {data} = await axios.delete(`/contacts/${id}`)
        // dispatch(contactsSlice.removeContact)
        // console.log(data)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const contactsOperations = {getContacts, addContact, deleteContact}

export default contactsOperations