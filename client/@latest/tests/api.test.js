import test from 'node:test'
import assert from 'node:assert/strict'
import { getProducts, getProduct, getCases } from '../src/api/catalog.js'
import { getOrders, getOrder } from '../src/api/orders.js'
import { login } from '../src/api/auth.js'

test('产品接口支持分类筛选与详情查询', async()=>{
  const list=await getProducts({category:'厨房'})
  assert.ok(list.data.every((item)=>item.category==='厨房'))
  const detail=await getProduct('p1')
  assert.equal(detail.data.id,'p1')
})
test('订单接口返回列表与对应详情',async()=>{
  const list=await getOrders({status:'进行中'})
  assert.ok(list.data.items.length>0)
  const detail=await getOrder(list.data.items[0].id)
  assert.equal(detail.data.id,list.data.items[0].id)
})
test('静态登录拒绝空密码',async()=>{
  await assert.rejects(()=>login({phone:'13800138000',password:''}),/请输入密码/)
})
test('案例接口支持风格筛选',async()=>{
  const result=await getCases({style:'现代欧式'})
  assert.ok(result.data.every((item)=>item.style==='现代欧式'))
})
