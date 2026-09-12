# 全屋定制平台

基于 Vue 3、Element Plus 与 Django 规划的全屋定制平台，仓库同时包含客户端、管理端和后端目录。

## 目录结构

- `client/@latest`：客户前端，开发端口 `5173`
- `admin/@latest`：管理端，开发端口 `5172`
- `service`：Django 后端预留目录
- `已填写材料`、`参考文献`：毕业设计配套资料

## 启动客户端

```bash
cd client/@latest
npm install
npm run dev
```

## 启动管理端

```bash
cd admin/@latest
npm install
npm run dev
```

当前前端请求层使用静态数据，后续可在保持页面业务调用方式不变的情况下接入 Django API。

