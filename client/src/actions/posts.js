import * as api from '../api/index';

//functions that return actions (fetch, post, delete, etc.)
export const getPosts = () => async (dispatch) => {
    try {
        //use redux to fetch data from the backend and send it to frontend
        const { data } = await api.fetchQuotes();
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createQuotes(post);
        dispatch({
            type: 'CREATE',
            payload: data
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteQuote = (id) => async (dispatch) => {
    try {
        await api.deleteQuote(id);
        dispatch({
            type: 'DELETE',
            payload: id
        })
    } catch (error) {
        console.log(error.message);
    }
}