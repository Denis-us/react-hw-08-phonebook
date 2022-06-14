import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

axios.defaults.baseURL = 'http://connections-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

const registration = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('/users/signup', credentials)
        token.set(data.token)
        return data
    } catch (error) {

    }
})

const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const {data} = await axios.post('/users/login', credentials)
        token.set(data.token)
        return data
    } catch (error) {

    }
})

const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout')
        token.unset()
    } catch (error) {

    }
})

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, {getState, rejectWithValue}) => {
    const state = getState()
    const persistedToken = state.auth.token
    
    if(persistedToken === null) {
        return rejectWithValue()
    }

    token.set(persistedToken)

    try {
        const {data} = await axios.get('/users/current')
        return data
    } catch (error) {
        rejectWithValue(error.message)
    }
    
})

const authOperations = {registration, login, logout, getCurrentUser}

export default authOperations