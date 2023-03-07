import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));
export const getAllColumns = (state => state.columns);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const useSearch = payload => ({ type: 'USE_SEARCH', payload });

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, action.payload] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, action.payload] };
        case 'USE_SEARCH':
            return { ...state, searchString: action.payload };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;