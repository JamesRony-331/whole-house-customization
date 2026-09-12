import request from '../request/request.js';import '../data/index.js'
export const submitCustomization=(data)=>request.post('/customize',data)
