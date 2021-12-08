import { combineReducers } from "redux";

import auth from './auth.js';
import orgs from './orgs.js';

 
export default combineReducers({
    auth,
    orgs,
})