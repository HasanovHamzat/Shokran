import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

export const reducers = combineReducers({

});
export type AppDispatch = typeof store.dispatch;





const middlewares = [thunkMiddleware];

export const store = createStore(reducers, applyMiddleware(...middlewares));
