const initState = {
    favorites: [
        {id: '1', thumbnail: "http://hp-api.herokuapp.com/images/luna.jpg", name: 'Luna Lovegood'},
        {id: '24', thumbnail: "http://hp-api.herokuapp.com/images/cho.jpg", name: 'Cho Chang'},
    ]
}

const favReducer = (state = initState, action) => {
    return state;
}

export default favReducer;