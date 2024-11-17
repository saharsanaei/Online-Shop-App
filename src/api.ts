import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchUser = () => axios.get(`${BASE_URL}/users/1`);