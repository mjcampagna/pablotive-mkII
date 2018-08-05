import { combineReducers } from 'redux';

import pangolin from './components/Pangolin/reducer.js';
import unsplash from './components/Routes/reducer.js';

const rootReducer = combineReducers({
	pangolin,
	unsplash
});

export default rootReducer;
