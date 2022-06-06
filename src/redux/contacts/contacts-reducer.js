import { createReducer, combineReducers } from '@reduxjs/toolkit'
import {getContacts, postContacts, deleteContact} from './contacts-operations'
import {changeFilter} from './contacts-actions'


const items = createReducer([], {
    [getContacts.fulfilled]: (_, {payload}) => payload,
    [postContacts.fulfilled]: (state, {payload}) => [...state, payload],
    [deleteContact.fulfilled]: (state, {payload}) => state.filter(({id}) => id !== payload)
})
const isLoader = createReducer(false, {
    [getContacts.pending]: () => true,
    [getContacts.fulfilled]: () => false,
    [getContacts.rejected]: () => false
})
const error = createReducer(null, {
    [getContacts.rejected]: (_, {payload}) => payload,
    [getContacts.pending]: () => null,
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload
})

export default combineReducers({
    items,
    filter,
    isLoader,
    error
})