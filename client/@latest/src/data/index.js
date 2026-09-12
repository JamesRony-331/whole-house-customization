import { products,cases } from './catalog.js';import { orders } from './orders.js';import { profile } from './profile.js';import { answerFor } from './assistant.js';import { registerMockRoute } from '../request/request.js'
const byId=(items,id)=>{const item=items.find(x=>x.id===id);if(!item)throw new Error('未找到对应数据');return item}
registerMockRoute('GET','/products',({params={}})=>products.filter(x=>(!params.category||x.category===params.category)&&(!params.style||x.style===params.style)))
registerMockRoute('GET','/product',({params})=>byId(products,params.id))
registerMockRoute('GET','/cases',({params={}})=>cases.filter(x=>(!params.space||x.space===params.space)&&(!params.style||x.style===params.style)))
registerMockRoute('GET','/case',({params})=>byId(cases,params.id))
registerMockRoute('GET','/orders',({params={}})=>({items:orders.filter(x=>!params.status||x.status===params.status),total:orders.length}))
registerMockRoute('GET','/order',({params})=>byId(orders,params.id))
registerMockRoute('GET','/profile',()=>profile)
registerMockRoute('PUT','/profile',(body)=>({...profile,...body}))
registerMockRoute('POST','/login',(body)=>{if(!body.password)throw new Error('请输入密码');return {token:'static-token',user:profile}})
registerMockRoute('POST','/register',(body)=>({id:'static-user',...body}))
registerMockRoute('POST','/customize',(body)=>({id:'REQ'+Date.now(),...body}))
registerMockRoute('POST','/assistant',({message})=>({message:answerFor(message)}))
