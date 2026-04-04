# TermiQue 项目启动检查清单

## ✅ 已完成的检查

- [x] **layout.tsx** - 修复了className属性错误
- [x] **前端pages** - 所有页面已改为async并正确使用await
- [x] **lib/posts.ts** - 已改为调用后端API
- [x] **backend/main.py** - FastAPI应用正确配置
- [x] **.env.local** - 后端地址配置完成
- [x] **Python环境** - 虚拟环境已配置，依赖已安装

## 🚀 快速启动步骤

### 步骤1：启动FastAPI后端

```bash
# 打开终端1，切换到项目目录
cd d:\OneDrive\0_Code\VS_Code\termique.top

# 启动后端服务
python backend/main.py
```

✅ 预期输出：
```
INFO:     Application startup complete
```

验证后端：访问 `http://127.0.0.1:8000` 或 `http://127.0.0.1:8000/docs`

### 步骤2：启动Next.js前端

```bash
# 打开新的终端2，切换到项目目录
cd d:\OneDrive\0_Code\VS_Code\termique.top

# 启动前端开发服务器
npm run dev
```

✅ 预期输出：
```
> next dev
  ▲ Next.js 16.2.1
  - ready - started server on 0.0.0.0:3000
```

### 步骤3：访问应用

打开浏览器访问：`http://localhost:3000`

---

## 📋 验证清单

### 后端验证 (http://127.0.0.1:8000)

- [ ] 根路由 → `/` 返回 `{"message": "TermiQue API Server", "version": "0.1.0"}`
- [ ] 文章列表API → `GET /api/posts` 返回文章数组
- [ ] 单篇文章API → `GET /api/posts/{slug}` 返回完整文章内容
- [ ] Swagger文档 → `/docs` 显示API文档

### 前端验证 (http://localhost:3000)

- [ ] 首页加载成功，显示文章摘要
- [ ] 文章列表页 (`/posts`) 显示所有文章
- [ ] 文章详情页 (`/posts/{slug}`) 显示完整内容
- [ ] 没有404或网络错误

### 环境验证

- [ ] `.env.local` 配置了 `NEXT_PUBLIC_API_URL=http://127.0.0.1:8000`
- [ ] Python虚拟环境位置：`d:/OneDrive/0_Code/VS_Code/termique.top/.venv`
- [ ] 所有npm依赖已安装（存在 `node_modules` 目录）
- [ ] FastAPI依赖已安装（运行 `pip list | grep fastapi` 验证）

---

## 🆘 常见问题排查

### 后端无法启动

```bash
# 检查Python版本
python --version

# 检查虚拟环境
which python  # Linux/Mac
where python  # Windows

# 重新安装依赖
pip install -r backend/requirements.txt

# 查看详细错误
python -m uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

### 前端无法连接后端

检查浏览器控制台(F12) → Console 标签：

1. 如果看到CORS错误，确保后端已启动
2. 如果看到网络超时，检查 `.env.local` 中的 API URL
3. 如果看到404错误，检查 `content/posts/` 中是否有文章

### 文章不显示

```bash
# 检查后端API是否正常返回文章
curl http://127.0.0.1:8000/api/posts

# 检查文章文件是否存在
ls content/posts/
```

---

## 📝 新增文章流程

1. 在 `content/posts/` 目录新建 `.md` 文件
2. 参考现有文章格式添加 Front Matter
3. 编写文章内容
4. 刷新浏览器即可看到新文章

---

## 📦 项目版本信息

- Node.js: 18+
- Python: 3.9+ (已用3.12.8)
- Next.js: 16.2.1
- FastAPI: 0.104.1
- Uvicorn: 0.24.0

---

**最后更新**: 2026-04-02
**状态**: ✅ 所有系统检查通过，可以正常启动
