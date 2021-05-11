export default (state = {authData: null}, action) => {
    switch(action.type){
        case 'AUTH':
            //get the profile info and set it to local storage
            localStorage.setItem('user', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        case 'LOGOUT':
            //clear the user data from local storage
            localStorage.clear();
            return {...state, authData: null};
        default:
            return state;
    }
}