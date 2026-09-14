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

请先创建 MySQL 数据库、导入项目后续提供的 SQL 文件，并根据 `service/WholeHouse/.env.example` 创建本地 `.env`。`.env` 需要放在 `service/WholeHouse/.env`，可填写为：

```dotenv
DJANGO_SECRET_KEY=请替换为随机且保密的字符串
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost
DB_NAME=whole_house_customization
DB_USER=root
DB_PASSWORD=你的MySQL密码
DB_HOST=127.0.0.1
DB_PORT=3306
```

其中 `DB_USER` 和 `DB_PASSWORD` 必须与本机 MySQL 账号一致；数据库名如有调整，应同时修改 `DB_NAME`。完整字段说明见 `service/WholeHouse/README.md`。真实 `.env` 已被 Git 忽略，请勿上传密码和密钥。

配置完成后执行：

```bash
cd service/WholeHouse
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

后端默认运行在 `http://127.0.0.1:8000`。详细说明见 `service/WholeHouse/README.md`。
