import { combineReducers } from 'redux';
import app from './appReducer';
import screen from './portraitReducer';
import type from './typeReducer';
import description from './descriptionReducer';

export default combineReducers({
    app,
    screen,
    type,
    description
})