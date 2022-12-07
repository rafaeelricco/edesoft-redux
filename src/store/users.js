import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Initial state
const initialState = {
  loading: false,
  users: []
}

// fetch to get all users
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return fetch('https://fakestoreapi.com/users').then((res) => res.json())
})

// user slice reducer
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      // Add user to the state array
      state.loading = true
    },
    [fetchUsers.fulfilled]: (state, action) => {
      // spread the response to the state array
      state.users = [...action.payload]
      state.loading = false
    },
    [fetchUsers.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = false
    }
  },
  reducers: {
    addUser: (state, action) => {
      // Add user to the state array
      state.users = [...state.users, action.payload]
    },
    removeUser: (state, action) => {
      // Remove user from the state array
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    updateUser: (state, action) => {
      // found the user to update
      const user = state.users.find((user) => user.id === action.payload.id)
      // verify what fields are being updated
      if (
        action.payload.name.firstname &&
        action.payload.name.lastname &&
        action.payload.name.username
      ) {
        user.name.firstname = action.payload.name.firstname
        user.name.lastname = action.payload.name.lastname
        user.name.username = action.payload.name.username
      }
      if (action.payload.email) {
        user.email = action.payload.email
      }
      if (action.payload.phone) {
        user.phone = action.payload.phone
      }
      if (
        action.payload.address.street &&
        action.payload.address.number &&
        action.payload.address.city &&
        action.payload.address.zipcode
      ) {
        user.address.street = action.payload.address.street
        user.address.number = action.payload.address.number
        user.address.city = action.payload.address.city
        user.address.zipcode = action.payload.address.zipcode
      }
      // update the user in the state array
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload
        }
        return user
      })
    }
  }
})

export const { addUser, removeUser, updateUser } = userSlice.actions
export default userSlice.reducer
