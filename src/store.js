import {createStore, combineReducers} from 'redux'
import reducer from './reducer';

const reducers = combineReducers({
    count: reducer
})

const store = createStore(reducers);

export default store;