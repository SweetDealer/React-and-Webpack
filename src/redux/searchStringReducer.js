// actions
const createActionName = actionName => `app/lists/${actionName}`;
const START_SEARCH = createActionName('START_SEARCH');

// action creators
export const search = payload => ({ type: START_SEARCH, payload });

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case START_SEARCH:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;