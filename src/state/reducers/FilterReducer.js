const initialState = "off";

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "on":
            return action.payload;
        default:
            return state
    }
};

export default reducer;