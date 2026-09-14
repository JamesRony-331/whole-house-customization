import test from 'node:test';import assert from 'node:assert/strict';import {routeRecords,defaultAdminPath} from '../src/router/routes.js'
test('登录后默认进入定制需求',()=>assert.equal(defaultAdminPath,'/requirements'))
test('已删除模块不能再通过路由访问',()=>{const paths=JSON.stringify(routeRecords);for(const removed of ['dashboard','analytics','materials','suppliers'])assert.equal(paths.includes(removed),false)})
test('管理端包含任务书保留的核心业务路由',()=>{const paths=routeRecords.flatMap(r=>r.children?r.children.map(c=>c.path):[r.path]);for(const path of ['/login','/requirements','/customers','/orders','/production','/service','/settings'])assert.ok(paths.includes(path))})
