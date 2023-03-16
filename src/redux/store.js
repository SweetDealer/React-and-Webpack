import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';
import searchStringReducer from './searchStringReducer';

export const search = payload => ({ type: 'START_SEARCH', payload });

const reducer = (state, action) => {
    const newState = {
        lists: listsReducer(state.lists, action),
        columns: columnsReducer(state.columns, action),
        cards: cardsReducer(state.cards, action),
        searchString: searchStringReducer(state.searchString, action)
    };

    return newState;
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;