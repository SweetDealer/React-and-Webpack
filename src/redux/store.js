import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';
import searchStringReducer from './searchStringReducer';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));
export const getAllColumns = (state => state.columns);
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = (state => state.lists);
export const getFavoriteCard = ({ cards }) => cards.filter(card => card.isFavorite === true);

// action creators
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const search = payload => ({ type: 'START_SEARCH', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const reducer = (state, action) => {
    const newState = {
        lists: listsReducer(state.lists, action),
        columns: columnsReducer(state.columns, action),
        cards: cardsReducer(state.cards, action),
        searchString: searchStringReducer(state.searchString, action)
    };

    return newState;
};

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_LIST':
//             return { ...state, lists: [...state.lists, action.payload] };
//         case 'ADD_COLUMN':
//             return { ...state, columns: [...state.columns, action.payload] };
//         case 'ADD_CARD':
//             return { ...state, cards: [...state.cards, action.payload] };
//         case 'START_SEARCH':
//             return { ...state, searchString: action.payload };
//         case 'TOGGLE_CARD_FAVORITE':
//             return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//         default:
//             return state;
//     }
// };

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;