import test from 'node:test';import assert from 'node:assert/strict';import {createDraft,validateDraft} from '../src/utils/customize.js'
test('定制草稿提供稳定默认结构',()=>{const draft=createDraft();assert.equal(draft.space,'厨房');assert.deepEqual(draft.dimensions,{length:null,width:null,height:null})})
test('缺少联系人和预算时给出明确错误',()=>{const errors=validateDraft(createDraft());assert.deepEqual(errors,['请填写联系人','请选择预算范围'])})
