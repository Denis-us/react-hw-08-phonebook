import { createSlice} from '@reduxjs/toolkit'
import contactsOperations from './contactsOperations'

const initialState = {
    contacts: [],
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      removeContact(state, {payload}) {
        state.contacts.filter(({id}) => id !== payload)
      }
    },
    extraReducers: {
        [contactsOperations.getContacts.fulfilled](state, {payload}) {
          state.contacts = payload
        },
        [contactsOperations.addContact.fulfilled](state, {payload}) {
          state.contacts.push(payload)
      },
      [contactsOperations.deleteContact.fulfilled](state, {payload}) {
        state.contacts.filter(({id}) => id !== payload)
    },
    
    }
})

export const {removeContact, newContact} = contactsSlice.actions
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
