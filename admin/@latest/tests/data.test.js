import test from'node:test';import assert from'node:assert/strict';import{queryEntity,getRequirement,updateRequirement}from'../src/api/admin.js'
test('实体列表支持关键词筛选',async()=>{const r=await queryEntity('customers',{keyword:'张'});assert.ok(r.data.items.every(x=>JSON.stringify(x).includes('张')))})
test('需求状态可在静态内存中更新',async()=>{const before=await getRequirement('REQ20260907001');assert.equal(before.data.status,'待受理');await updateRequirement(before.data.id,{status:'已受理'});const after=await getRequirement(before.data.id);assert.equal(after.data.status,'已受理')})
