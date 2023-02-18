import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/UsersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer
    },
});

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUser';