import test from 'node:test';import assert from 'node:assert/strict';import request,{registerMockRoute} from '../src/request/request.js'
test('静态请求返回统一结构',async()=>{registerMockRoute('GET','/ping',()=>({ok:true}));assert.deepEqual(await request.get('/ping'),{code:200,message:'success',data:{ok:true}})})
test('未知接口抛出明确错误',async()=>assert.rejects(()=>request.get('/unknown'),/未找到静态接口/))
