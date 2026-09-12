import test from 'node:test'
import assert from 'node:assert/strict'
import request, { registerMockRoute } from '../src/request/request.js'

test('静态请求返回统一响应结构', async () => {
  registerMockRoute('GET', '/test/ping', () => ({ pong: true }))
  const response = await request.get('/test/ping')
  assert.deepEqual(response, { code: 200, message: 'success', data: { pong: true } })
})

test('未知静态接口返回可识别错误', async () => {
  await assert.rejects(() => request.get('/missing'), /未找到静态接口/)
})
