const handlers = new Map()

const keyFor = (method, url) => `${method.toUpperCase()} ${url}`

export function registerMockRoute(method, url, handler) {
  handlers.set(keyFor(method, url), handler)
}

async function send(method, url, payload) {
  const handler = handlers.get(keyFor(method, url))
  if (!handler) throw new Error(`未找到静态接口：${method.toUpperCase()} ${url}`)
  await new Promise((resolve) => setTimeout(resolve, 80))
  const data = await handler(payload)
  return { code: 200, message: 'success', data }
}

const request = {
  get: (url, config = {}) => send('GET', url, config),
  post: (url, body = {}) => send('POST', url, body),
  put: (url, body = {}) => send('PUT', url, body),
  delete: (url, config = {}) => send('DELETE', url, config),
}

export default request
