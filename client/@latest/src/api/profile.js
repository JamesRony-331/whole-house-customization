import request from '../request/request.js';import '../data/index.js'
export const getProfile=()=>request.get('/profile');export const updateProfile=(data)=>request.put('/profile',data)
