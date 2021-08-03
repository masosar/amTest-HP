const initialState = "/hp-characters";

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "student":
            return action.payload;
        case "staff":
             return action.payload;
        default:
            return state
    }
};

export default reducer;