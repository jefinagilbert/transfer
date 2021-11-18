import React from "react";
import { combineReducers } from "redux";
import allUsersReducer from "./allUsersReducer";
import currentUserReducer from "./currentUserReducer";

const reducers = combineReducers({
    users : allUsersReducer,
    currentUser : currentUserReducer
})

export default reducers