import test from 'node:test'
import assert from 'node:assert/strict'
import { routeRecords } from '../src/router/routes.js'

test('客户端路由包含完整页面清单', () => {
  const paths = routeRecords.flatMap((route) =>
    route.children ? route.children.map((child) => child.path) : [route.path],
  )
  const required = ['/', '/home', '/products', '/products/:id', '/cases', '/cases/:id', '/customize', '/customize/confirm', '/login', '/register', '/workspace', '/orders', '/orders/:id', '/schemes/:id', '/assistant', '/profile', '/:pathMatch(.*)*']
  assert.deepEqual(paths, required)
})
