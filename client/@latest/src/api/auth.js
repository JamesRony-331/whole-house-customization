import request from '../request/request.js';import '../data/index.js'
export const login=(data)=>request.post('/login',data);export const register=(data)=>request.post('/register',data)
