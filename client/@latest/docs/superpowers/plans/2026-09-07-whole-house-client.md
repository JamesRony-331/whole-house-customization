# 木序定制客户端实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建成完整的 Vue 3 + Element Plus 全屋定制客户端，包含沉浸式默认页、正式首页、客户业务页面、静态请求层和源码布局说明。

**Architecture:** Vue Router 负责公开页与客户页路由；共享布局和通用组件确保整站视觉一致；页面仅调用 `src/api` 领域方法，领域方法通过 `src/request/request.js` 获取 `src/data` 静态数据。CSS 按 tokens、base、Element Plus、components、responsive 分层。

**Tech Stack:** Vue 3、Vite、Vue Router 4、Element Plus、原生 CSS、Node.js 内置测试运行器

**Spec:** `docs/superpowers/specs/2026-09-07-whole-house-client-design.md`

## Global Constraints

- 客户端开发端口固定为 `5173`；管理端保持不变并预留 `5172`。
- 不引入 Vue、Vue Router、Element Plus 之外的运行时 UI 依赖。
- 页面数据必须经过 API 与 `request.js`，模板不得直接导入静态数据文件。
- 不创建后台管理功能、虚假经营统计或真实 AI/API 调用。
- 动画展示页必须支持 `prefers-reduced-motion`。
- 使用已确认的现代欧式色彩、排版、间距和小圆角系统。

---

### Task 1: 工程基础、请求契约与路由清单

**Files:**
- Modify: `package.json`, `vite.config.js`, `src/main.js`, `src/App.vue`
- Create: `src/request/request.js`, `src/data/index.js`, `src/router/index.js`
- Test: `tests/request.test.js`, `tests/routes.test.js`

**Interfaces:**
- `request.get(url, config)`, `request.post(url, body)` 返回 `{ code, message, data }` Promise。
- `routeRecords` 导出完整路由记录，`router` 为应用实例。

- [ ] 先编写请求成功、未知接口失败、路由路径完整性测试。
- [ ] 运行 `node --test`，确认因模块缺失或契约未实现而失败。
- [ ] 安装 Vue Router、Element Plus 与 Element Plus Icons，完成端口和入口配置。
- [ ] 实现静态请求分发与完整路由表，使测试通过。

### Task 2: 设计令牌、全局样式与公共壳层

**Files:**
- Create: `src/styles/tokens.css`, `base.css`, `element.css`, `components.css`, `responsive.css`
- Create: `src/layouts/PublicLayout.vue`
- Create: `src/components/common/AppHeader.vue`, `AppFooter.vue`, `PageHeader.vue`, `StatusView.vue`, `OrderProgress.vue`, `MaterialSwatch.vue`

**Interfaces:**
- `PublicLayout` 提供统一导航、内容区和页脚。
- `PageHeader` 接收 `title`、`description`、`breadcrumbs`。
- `StatusView` 接收 `type`、`title`、`description`。
- `OrderProgress` 接收 `steps` 与 `current`。

- [ ] 建立集中 CSS 变量与全局排版、容器、状态、表格和表单规则。
- [ ] 建立公共壳层及桌面/移动导航。
- [ ] 为 Element Plus 控件统一字体、高度、圆角、边框与主色。
- [ ] 运行构建验证公共层编译。

### Task 3: 静态领域数据与 API

**Files:**
- Create: `src/data/catalog.js`, `orders.js`, `profile.js`, `assistant.js`
- Create: `src/api/catalog.js`, `orders.js`, `auth.js`, `profile.js`, `assistant.js`
- Test: `tests/api.test.js`

**Interfaces:**
- 产品/案例 API 支持列表筛选和按 ID 查询。
- 订单 API 支持列表、详情和当前订单。
- 登录、注册、个人资料和 AI 回复均返回统一响应结构。

- [ ] 先编写列表筛选、详情、表单提交和静态对话响应测试。
- [ ] 运行测试并确认因 API 尚未实现而失败。
- [ ] 实现静态数据、路由处理器和领域 API。
- [ ] 再次运行测试并确认通过。

### Task 4: 默认动画展示页与正式首页

**Files:**
- Create: `src/views/ShowcaseView.vue`, `src/views/HomeView.vue`
- Create: `src/assets/images/*`

**Interfaces:**
- `/` 展示滚动叙事并通过 CTA 跳转 `/home`。
- `/home` 展示正式首页，悬浮方案入口跳转 `/customize`。

- [ ] 将确认概念中的空间图像放入项目资源目录。
- [ ] 实现 sticky 滚动进度、缩放、显隐和减少动态效果降级。
- [ ] 实现四层正式首页与跨区悬浮方案入口。
- [ ] 构建并检查两个路由。

### Task 5: 产品、案例与认证页面

**Files:**
- Create: `src/views/catalog/ProductListView.vue`, `ProductDetailView.vue`, `CaseListView.vue`, `CaseDetailView.vue`
- Create: `src/views/auth/LoginView.vue`, `RegisterView.vue`

- [ ] 实现产品/案例筛选、开放式图片网格和详情双栏。
- [ ] 实现登录注册表单、校验、提交状态和页面跳转。
- [ ] 检查加载、空和错误状态。
- [ ] 构建验证。

### Task 6: 在线定制与确认流程

**Files:**
- Create: `src/views/customize/CustomizeView.vue`, `CustomizeConfirmView.vue`
- Test: `tests/customize.test.js`

- [ ] 先编写草稿规范化与必填字段验证测试并确认失败。
- [ ] 实现可测试的定制表单模型工具。
- [ ] 实现分组长表单、材质选择、预算交期、上传占位交互与确认页。
- [ ] 运行测试和构建。

### Task 7: 客户工作台、订单与方案

**Files:**
- Create: `src/views/customer/WorkspaceView.vue`, `OrderListView.vue`, `OrderDetailView.vue`, `SchemeDetailView.vue`

- [ ] 实现当前订单摘要、进度组件、紧凑订单表格和服务侧栏。
- [ ] 实现订单筛选、分页和详情生产时间轴。
- [ ] 实现设计方案图集与配置详情。
- [ ] 构建验证。

### Task 8: AI 助手、个人中心与通用状态

**Files:**
- Create: `src/views/customer/AssistantView.vue`, `ProfileView.vue`
- Create: `src/views/NotFoundView.vue`
- Test: `tests/assistant.test.js`

- [ ] 先编写静态助手回复选择测试并确认失败。
- [ ] 实现本地对话状态、发送态和清空操作。
- [ ] 实现个人资料表单和保存反馈。
- [ ] 实现 404 页面并验证路由。

### Task 9: 源码说明与最终一致性验收

**Files:**
- Create: `前端布局与CSS实现说明.md`
- Create: `docs/design-concepts/fidelity-ledger.md`

- [ ] 编写布局、Grid/Flex、Sticky、响应式、Element Plus 覆盖和请求层替换说明。
- [ ] 运行完整 `node --test` 和 `npm run build`。
- [ ] 在 5173 启动开发服务器，使用应用内浏览器检查关键路由和核心交互。
- [ ] 截取桌面及移动关键页面，使用 `view_image` 与确认概念逐项比较。
- [ ] 修复溢出、换行、层级、间距、响应式和交互问题。
- [ ] 更新视觉一致性记录并再次运行完整验证。
