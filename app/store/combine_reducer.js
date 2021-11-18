import { combineReducers } from "redux";
import HomeReducer from '../components/templates/Home/reducers';
import CreateReducer from '../components/templates/CreateContact/reducers';
import UpdateReducer from '../components/templates/UpdateContact/reducers';

export default combineReducers({
    defaultReducer: () => [],
    homeReducer: HomeReducer,
    createReducer: CreateReducer,
    updateReducer: UpdateReducer,
});