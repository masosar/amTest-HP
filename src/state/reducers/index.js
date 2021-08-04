import { combineReducers } from 'redux';
import favoriteReducer from './FavReducer';
import selectedUrl from './UrlReducer'
import applyFilter from './FilterReducer'

const reducers =  combineReducers({
    favorites: favoriteReducer,
    category: selectedUrl,
    filter: applyFilter
});

export default reducers;