//Housing all of our actions
export const addFavorite = (text) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: text
        });
    }
}

export const removeFavorite = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "remove",
            payload: amount
        });
    }
}

export const urlStudent = (text) => {
    return (dispatch) => {
        dispatch({
            type: "student",
            payload: text
        });
    }
}

export const urlStaff = (text) => {
    return (dispatch) => {
        dispatch({
            type: "staff",
            payload: text
        });
    }
}

export const filterUrl = (text) => {
    return (dispatch) => {
        dispatch({
            type: "on",
            payload: text
        });
    }
}


