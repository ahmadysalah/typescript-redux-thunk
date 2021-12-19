import { combineReducers, createStore } from 'redux';
import { JobReducer } from './reducers';
import { IAction, IReducer } from './constants';


const reducer = combineReducers<IReducer, IAction>({
    jobs: JobReducer
});


export default createStore(reducer);
