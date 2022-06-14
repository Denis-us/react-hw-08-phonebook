import { createSlice } from '@reduxjs/toolkit'
import contactsOperations from './contactsOperations'

const initialState = {
    contacts: [],
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [contactsOperations.getContacts.fulfilled](state, {payload}) {
          state.contacts = payload
            // state.token = payload.token
            // state.isLoggedIn = true
        },
        [contactsOperations.addContact.fulfilled](state, {payload}) {
          // state.contacts = state.contacts.push(payload)
          state.contacts.push(payload)
          // state.token = payload.token
          // state.isLoggedIn = true
      },
      [contactsOperations.deleteContact.fulfilled](state, {payload}) {
        console.log(payload)
        state.contacts.filter(({id}) => id !== payload)
        // state.token = payload.token
        // state.isLoggedIn = true
    },
        // [contactsOperations.login.fulfilled](state, {payload}) {
        //     state.user = payload.user
        //     state.token = payload.token
        //     state.isLoggedIn = true
        // },
        // [contactsOperations.logout.fulfilled](state, {payload}) {
        //     state.user = {name: null, email: null}
        //     state.token = null
        //     state.isLoggedIn = false
        // },
    }
})

export default contactsSlice.reducer


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// export const contactsApi = createApi({
//     reducerPath: 'contacts',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://connections-api.herokuapp.com' }),
//     tagTypes: ['Contacts'],
//     endpoints: (builder) => ({
//       getContacts: builder.query({
//         query: () => '/contacts',
//         providesTags: ['Contacts']
//       }),

//       addContact: builder.mutation({
//           query: values => ({
//               url: '/contacts',
//               method: 'POST',
//               body: values
//           }),
//           invalidatesTags: ['Contacts'],
//       }),

//       deleteContact: builder.mutation({
//         query: id => ({
//             url: `/contacts/${id}`,
//             method: 'DELETE',
//         }),
//         invalidatesTags: ['Contacts'],

//     }),
//     }),
//   })



// export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi
