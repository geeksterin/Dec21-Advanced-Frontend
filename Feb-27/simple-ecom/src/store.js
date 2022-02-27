import reducer from './reducers/reducer.js';
import {createStore} from 'redux';

const store = createStore(reducer);

export default store;
