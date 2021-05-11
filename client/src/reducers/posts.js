export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'DELETE':
            //Remove all quotes where the id === requested data id
            return posts.filter((post) => post.id !== action.payload);
        default:
            return posts;
    }
}