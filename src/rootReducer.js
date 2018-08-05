import { combineReducers } from 'redux';

import pangolin from './components/Pangolin/reducer.js';
import primitive from './components/Routes/reducer.js';

const rootReducer = combineReducers({
	pangolin,
	primitive
});

export default rootReducer;
