import axios from 'axios';
import post from './post';

export const client = axios.create({
  baseURL: 'http://localhost:8000'
});

export default {
  post 
};