import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducer';
import {thunk} from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
    ),
);
export default store;