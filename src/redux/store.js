import { createStore, combineReducers, applyMiddleware } from 'redux'
import {dataReducer} from "./reducer/dataReducer"

export const store = createStore(combineReducers({data:dataReducer}),{},applyMiddleware())