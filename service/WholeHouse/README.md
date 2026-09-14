# 全屋定制平台 Django 后端

后端采用 Django 4.2 LTS、Django REST Framework、MySQL 和 PyMySQL。开发与毕业设计演示阶段直接使用 Django 开发服务器运行。

## 环境要求

- Python 3.9 或更高版本
- MySQL 8

## 创建数据库

登录 MySQL 后执行：

```sql
CREATE DATABASE whole_house_customization
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

## 安装与配置

```bash
cd service/WholeHouse
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

打开 `.env`，填写本机 MySQL 用户名和密码。真实 `.env` 不会提交到 GitHub。

## 初始化数据库

```bash
python manage.py migrate
python manage.py createsuperuser
```

`createsuperuser` 为可选步骤，用于登录 Django 管理后台。

## 启动后端

```bash
python manage.py runserver
```

- 后端地址：`http://127.0.0.1:8000`
- 健康检查：`http://127.0.0.1:8000/api/health/`
- 管理后台：`http://127.0.0.1:8000/admin/`

## 运行测试

```bash
python manage.py test
python manage.py check
```
