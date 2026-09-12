# 木序定制管理端实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 `admin/@latest` 建成不含运营总览和数据分析的完整 Vue 3 管理端。

**Architecture:** AdminLayout 统一侧栏、顶栏和内容区；路由按业务模块懒加载；静态 request.js 注册内存处理器；通用列表组件覆盖标准管理页，需求、权限、订单、生产和库存使用专用页面。

**Tech Stack:** JavaScript、Vue 3、Vite、Vue Router 4、Element Plus、原生 CSS、Node.js 内置测试

**Spec:** `docs/superpowers/specs/2026-09-07-whole-house-admin-design.md`

## Global Constraints

- 管理端端口固定为 5172，客户端保持 5173。
- 不创建运营总览和数据分析路由、导航或数据。
- 登录后默认进入 `/requirements`。
- 页面数据必须经过领域 API 与 `request.js`。
- 不引入不必要依赖，不创建虚假经营指标。

### Task 1: 工程与测试契约

**Files:** `package.json`、`vite.config.js`、`src/main.js`、`src/router/*`、`src/request/request.js`、`tests/*`

- [ ] 编写路由排除项、默认跳转和请求响应测试并确认失败。
- [ ] 创建 Vue 3 工程配置和静态请求实现。
- [ ] 安装 Vue Router、Element Plus、图标与 ECharts。
- [ ] 运行测试确认通过。

### Task 2: 设计系统与管理壳层

**Files:** `src/styles/*`、`src/layouts/AdminLayout.vue`、`src/components/layout/*`、`src/components/common/*`

- [ ] 建立暖灰、胡桃木和古铜色设计令牌。
- [ ] 实现可折叠侧栏、移动抽屉、顶栏和面包屑。
- [ ] 实现统一页面标题、筛选、状态、表格、对话框与抽屉模式。
- [ ] 构建验证。

### Task 3: 静态数据与领域 API

**Files:** `src/data/*`、`src/api/*`、`tests/data.test.js`

- [ ] 编写筛选、分页、详情、库存预警和状态更新测试并确认失败。
- [ ] 实现客户、设计师、产品案例、需求订单、生产物料、供应商、客服和设置数据。
- [ ] 注册静态接口并建立领域 API。
- [ ] 运行测试确认通过。

### Task 4: 登录、需求和标准管理页

**Files:** `src/views/LoginView.vue`、`Requirement*`、`Customer*`、`Designer*`、`Product*`、`Case*`

- [ ] 实现分屏登录并跳转定制需求。
- [ ] 实现需求列表、详情抽屉和设计师分派。
- [ ] 实现客户、设计师、产品与案例管理表格及编辑对话框。
- [ ] 验证筛选、分页和反馈。

### Task 5: 权限、订单、方案与供应链页面

**Files:** 用户角色、订单、方案审核、生产、库存、供应商页面

- [ ] 实现用户与角色权限树。
- [ ] 实现订单详情、方案审核通过/退回。
- [ ] 实现生产工序进度和质检状态。
- [ ] 实现库存预警、物料和供应商管理。

### Task 6: 客服、设置、状态页与交付说明

**Files:** 客服、设置、404、`管理端布局与CSS实现说明.md`

- [ ] 实现客服会话记录和处理状态。
- [ ] 实现平台、字典、预警与通知设置。
- [ ] 实现加载、空、错误和 404 状态。
- [ ] 编写源码布局与请求层说明。

### Task 7: 浏览器与最终验证

- [ ] 运行完整测试与生产构建。
- [ ] 在 5172 启动管理端，检查登录、需求、订单、生产和库存。
- [ ] 检查 1440px 桌面与 390px 移动端。
- [ ] 对照确认概念修正层级、密度、溢出和交互。
