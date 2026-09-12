import request from '../request/request.js';import '../data/index.js'
export const getProducts=(params={})=>request.get('/products',{params});export const getProduct=(id)=>request.get('/product',{params:{id}});export const getCases=(params={})=>request.get('/cases',{params});export const getCase=(id)=>request.get('/case',{params:{id}})
