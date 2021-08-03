import { combineReducers } from 'redux';
import favoriteReducer from './FavReducer';
import selectedUrl from './UrlReducer'

const reducers =  combineReducers({
    favorites: favoriteReducer,
    category: selectedUrl
});

export default reducers;