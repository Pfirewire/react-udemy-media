import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/UsersSlice";
import { albumsApi } from "./apis/albumsApi";

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware);
    },
});

setupListeners(store.dispatch);

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation
} from './apis/albumsApi';