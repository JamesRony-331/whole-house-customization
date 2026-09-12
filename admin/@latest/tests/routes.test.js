import test from 'node:test';import assert from 'node:assert/strict';import {routeRecords,defaultAdminPath} from '../src/router/routes.js'
test('登录后默认进入定制需求',()=>assert.equal(defaultAdminPath,'/requirements'))
test('路由不包含运营总览和数据分析',()=>{const paths=JSON.stringify(routeRecords);assert.equal(paths.includes('dashboard'),false);assert.equal(paths.includes('analytics'),false)})
test('管理端包含核心业务路由',()=>{const paths=routeRecords.flatMap(r=>r.children?r.children.map(c=>c.path):[r.path]);for(const path of ['/login','/requirements','/customers','/orders','/production','/materials','/settings'])assert.ok(paths.includes(path))})
