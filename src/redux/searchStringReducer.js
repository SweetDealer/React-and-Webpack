const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case 'START_SEARCH':
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;