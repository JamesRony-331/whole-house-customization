# 木序定制管理端布局与 CSS 实现说明

管理端使用 Vue 3、Vue Router 与 Element Plus，端口固定为 5172。整体由固定深胡桃木侧栏、64px 白色顶栏和暖灰主工作区组成。登录页独立于管理壳层，登录后默认进入 `/requirements`。

侧栏通过 CSS 变量 `--aside` 在 216px 和 64px 之间切换；主内容使用对应左边距。列表页统一采用页面标题、连续筛选栏、紧凑表格与右对齐分页。Flexbox 用于顶栏、筛选和操作区，Grid 用于详情主/侧栏、权限页和登录分屏。

Element Plus 的主色、字体、边框和填充颜色由根级 CSS 变量统一覆盖。常规按钮高度 34px，表格行高 46px，圆角控制在 2–6px。状态优先使用圆点与文字，避免大量胶囊标签。

`src/request/request.js` 提供 `get/post/put/delete` Promise 接口，`src/data/index.js` 注册静态处理器，`src/api/admin.js` 提供页面使用的领域方法。接入 Django 时替换 request 内部发送逻辑即可，页面无需直接依赖静态数据。

管理端不包含运营总览和数据分析模块，也不提供相关路由、导航或虚假统计数据。
