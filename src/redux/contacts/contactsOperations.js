import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

axios.defaults.baseURL = 'http://connections-api.herokuapp.com'


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

const deleteContact = createAsyncThunk('contacts/delContacts', async (id) => {
    try {
        const {data} = await axios.delete(`/contacts/${id}`)
        // console.log(id)
        // console.log(data)
        return data
    } catch (error) {

    }
})

const contactsOperations = {getContacts, addContact, deleteContact}

export default contactsOperations