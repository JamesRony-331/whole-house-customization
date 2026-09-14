# 全屋定制平台

基于 Vue 3、Element Plus 与 Django 规划的全屋定制平台，仓库同时包含客户端、管理端和后端目录。

## 目录结构

- `client/@latest`：客户前端，开发端口 `5173`
- `admin/@latest`：管理端，开发端口 `5172`
- `service/WholeHouse`：Django REST Framework 后端，使用 MySQL 与 PyMySQL
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

## 启动后端

请先创建 MySQL 数据库并根据 `service/WholeHouse/.env.example` 创建本地 `.env`，然后执行：

```bash
cd service/WholeHouse
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

后端默认运行在 `http://127.0.0.1:8000`。详细说明见 `service/WholeHouse/README.md`。
