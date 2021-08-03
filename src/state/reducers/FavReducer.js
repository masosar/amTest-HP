const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "add":
            return [action.payload].concat(state).slice(0,5)
        default:
            return state
    }
};

export default reducer;