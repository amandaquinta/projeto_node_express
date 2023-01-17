import { createStore, combineReducers } from "redux";
import userReducer from './users-data'

const root = combineReducers({
    user: userReducer
});

const store = createStore(root);

export { store };