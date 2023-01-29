import { combineReducers } from 'redux';
import { cartReducer } from './reducer';

export const root = combineReducers({
    cartReducer,
});
