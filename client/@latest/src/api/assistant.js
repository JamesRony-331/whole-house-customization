import request from '../request/request.js';import '../data/index.js'
export const sendMessage=(message)=>request.post('/assistant',{message})
