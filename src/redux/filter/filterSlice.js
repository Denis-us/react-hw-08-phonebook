import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {filter: ''},
    reducers: {
        changeFilter(state, {payload}) {state.filter = payload}
    }
})

export const {changeFilter} = filterSlice.actions