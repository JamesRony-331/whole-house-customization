# 全屋定制平台 Django REST 后端设计

## 目标

在现有全屋定制项目的 `service` 目录中创建可运行的 Django REST 后端，为客户端和管理端后续从静态数据迁移到真实接口提供稳定基础。后端使用 MySQL 与 PyMySQL，开发和演示阶段直接通过 `python manage.py runserver` 启动。

## 技术方案

- Python 3.11 或更高版本
- Django 5
- Django REST Framework
- MySQL 8
- PyMySQL
- django-cors-headers
- python-dotenv
- Django 自带测试框架

不引入 Nginx、Gunicorn、Docker、Celery、Redis或额外部署服务。

## 项目结构

后端位于 `service`：

```text
service/
├── manage.py
├── requirements.txt
├── .env.example
├── README.md
├── config/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
└── apps/
    ├── common/
    ├── users/
    ├── catalog/
    ├── customization/
    ├── orders/
    ├── production/
    ├── inventory/
    └── service/
```

业务应用边界如下：

- `common`：统一响应、分页、基础模型和健康检查。
- `users`：用户、客户、设计师和角色信息。
- `catalog`：产品、分类、风格、材质和案例。
- `customization`：客户定制需求及尺寸、预算、偏好信息。
- `orders`：订单和设计方案。
- `production`：生产任务、工序进度和质检信息。
- `inventory`：物料、库存阈值和供应商。
- `service`：售后记录和投诉处理。

## 数据库配置

Django 使用 PyMySQL 作为 MySQL 驱动，并在 `config/__init__.py` 中执行 `pymysql.install_as_MySQLdb()`。

数据库配置全部通过 `.env` 读取：

- `DB_NAME=whole_house_customization`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST=127.0.0.1`
- `DB_PORT=3306`

仓库仅提交 `.env.example`，真实 `.env` 始终由 `.gitignore` 排除。

## API 设计

所有业务接口统一挂载在 `/api/` 下，首期提供：

- `/api/health/`：后端健康检查。
- `/api/auth/`：登录、注册及当前用户信息。
- `/api/products/`、`/api/cases/`：产品和案例查询。
- `/api/customizations/`：定制需求提交与管理。
- `/api/orders/`、`/api/schemes/`：订单和方案管理。
- `/api/production-tasks/`：生产任务管理。
- `/api/materials/`、`/api/suppliers/`：物料与供应商管理。
- `/api/after-sales/`：售后记录管理。

接口采用 DRF ViewSet 与 Router。列表接口使用统一分页；成功和失败响应保持可预测结构。首期不强制修改现有 Vue 静态请求层，真实接口建成后再逐页接入。

## 权限与安全

- 使用 Django 自带用户与会话认证作为首期基础。
- 管理接口要求已认证用户，公开产品和案例接口允许匿名读取。
- CORS 仅允许本地客户端 `http://localhost:5173` 和管理端 `http://localhost:5172`。
- 密钥、数据库账号和密码不得写入源码或 Git。
- 模型字段保留创建时间和更新时间，业务记录默认采用受控状态值。

## 测试策略

- 健康检查接口测试。
- 核心模型创建与状态约束测试。
- 产品、案例公开读取测试。
- 定制需求、订单及管理资源权限测试。
- 配置检查与迁移检查。

开发采用测试先行：先写出失败测试，再添加满足测试的最小实现，最后运行完整测试和 `python manage.py check`。

## 启动与部署说明

根目录和 `service/README.md` 将写明：

1. 创建并激活 Python 虚拟环境。
2. 安装 `requirements.txt`。
3. 在 MySQL 中创建 `whole_house_customization` 数据库。
4. 从 `.env.example` 复制生成 `.env` 并填写数据库账号。
5. 执行 `python manage.py migrate`。
6. 可选执行 `python manage.py createsuperuser`。
7. 执行 `python manage.py runserver`，通过 `http://127.0.0.1:8000` 访问。

文档不包含 Nginx、Gunicorn、Docker 等额外部署方式。

## Git 同步规则

- 后续提交信息统一使用中文。
- 每轮完成实现与验证后推送到 GitHub 的 `main` 分支。
- 不把与当前任务无关的本地删除或修改混入提交。

