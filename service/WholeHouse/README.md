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

复制后会生成 `service/WholeHouse/.env`。该文件需要填写以下内容：

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

### `.env` 字段说明

| 字段 | 是否必填 | 本地开发建议值 | 说明 |
| --- | --- | --- | --- |
| `DJANGO_SECRET_KEY` | 是 | 随机长字符串 | Django 加密签名密钥。不得使用示例文字，也不要提交到 GitHub。安装依赖后可执行 `python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"` 生成。 |
| `DJANGO_DEBUG` | 是 | `True` | 是否开启调试模式，只接受 `True` 或 `False`。本地开发使用 `True`；公开环境应改为 `False`。 |
| `DJANGO_ALLOWED_HOSTS` | 是 | `127.0.0.1,localhost` | 允许访问 Django 的主机名或 IP，多个值使用英文逗号分隔，不要填写 `http://`、端口或路径。 |
| `DB_NAME` | 是 | `whole_house_customization` | MySQL 数据库名称，必须与创建并导入 SQL 文件的数据库一致。 |
| `DB_USER` | 是 | `root` | 有权访问该数据库的 MySQL 用户名。若使用独立业务账号，请填写该账号。 |
| `DB_PASSWORD` | 是 | 本机 MySQL 密码 | 对应 `DB_USER` 的 MySQL 密码。密码包含空格或 `#` 等特殊字符时建议使用双引号包裹。空密码可写成 `DB_PASSWORD=`。 |
| `DB_HOST` | 是 | `127.0.0.1` | MySQL 服务地址。本机填写 `127.0.0.1`；数据库在其他机器或容器中时填写实际主机名或 IP。 |
| `DB_PORT` | 是 | `3306` | MySQL 服务端口，未修改 MySQL 默认配置时填写 `3306`。 |

本机 MySQL `root` 用户密码假设为 `123456` 时，开发环境示例如下：

```dotenv
DJANGO_SECRET_KEY=请使用上方命令生成的真实随机密钥
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost
DB_NAME=whole_house_customization
DB_USER=root
DB_PASSWORD=123456
DB_HOST=127.0.0.1
DB_PORT=3306
```

不要直接照搬示例中的密钥占位文字。项目通过 `python-dotenv` 启动时自动读取该文件；真实 `.env` 已在 `.gitignore` 中排除，不会提交到 GitHub。

## 导入数据库

创建 `whole_house_customization` 数据库后，导入项目后续提供的 SQL 文件。项目不使用 Django 迁移命令初始化演示数据库。

```bash
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
