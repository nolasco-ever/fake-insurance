import axios from 'axios';

const postsUrl = 'http://localhost:5000/posts';
const usersUrl = 'http://localhost:5000/users';

export const fetchQuotes = () => axios.get(postsUrl);
export const createQuotes = (newPost) => axios.post(postsUrl, newPost);
export const deleteQuote = (id) => axios.delete(postsUrl+'/'+id);

export const signIn = (formData) => axios.post(usersUrl+'/signin', formData);
export const signUp = (formData) => axios.post(usersUrl+'/signup', formData);