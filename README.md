# TermiQue 网站前端手动部署说明（Next.js + Nginx + PM2）

最后更新：2026-03-31

---

## 1. 项目基础信息

- **项目目录**：`/var/www/termique-site`
- **运行框架**：Next.js
- **本地/内网端口**：`3000`
- **进程管理**：PM2（应用名称：`termique-site`）
- **Web 服务器**：Nginx（对外暴露 80/443 端口，反向代理到 3000）

---

## 2. 本地提交与推送代码

在本地项目根目录（如 VS Code 终端）执行：

```bash
git add .
git commit -m "feat: 更新了首页和备案信息"
git push origin main
```

> 提示：如果只需记录日常提交，`commit message` 简要描述修改内容即可。

---

## 3. 服务器端拉取与重启流程（手动）

SSH 登录到服务器后，按顺序执行以下命令：

```bash
# 1. 进入项目目录
cd /var/www/termique-site

# 2. 拉取最新代码
git pull origin main

# 3. 安装依赖（如果 package.json 有更新）
npm install

# 4. 生产环境构建
npm run build

# 5. 重启 PM2 守护进程
pm2 restart termique-site

# 6. 查看服务运行状态
pm2 status
```

---

## 4. Nginx 配置参考

当前网站的 Nginx 配置文件位于 `/etc/nginx/sites-available/termique.top`。
前端反向代理的核心配置如下：

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    # 前端页面转发到 Next.js (3000端口)
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

*如果修改了 Nginx 配置，需执行以下命令重载生效：*
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. 一键部署脚本

如果在服务器上已创建了 `deploy.sh` 脚本，可直接运行以下命令替代“步骤 3”中的繁琐操作：

```bash
cd /var/www/termique-site
./deploy.sh
```

---

## 6. 常见故障排查

### 6.1 网站打不开或访问报错

1. **检查 PM2 进程是否在线**
   ```bash
   pm2 status
   ```
   *状态应为 `online`，如果不在线或频繁重启，查看日志排查问题。*

2. **查看 Next.js 运行日志**
   ```bash
   pm2 logs termique-site --lines 50
   ```

3. **检查本地 3000 端口是否正常响应**
   ```bash
   curl -I http://127.0.0.1:3000
   ```
   *如果返回 `HTTP/1.1 200 OK`，说明前端服务没问题，问题出在 Nginx 或外部网络。*

### 6.2 Nginx 错误排查

1. **检查 Nginx 状态**
   ```bash
   sudo systemctl status nginx
   ```
2. **查看 Nginx 错误日志**
   ```bash
   sudo tail -n 50 /var/log/nginx/error.log
   ```

---

## 7. 网站合规信息（页脚展示）

- **备案主体**：TermiQue
- **备案/许可证编号**：`京ICP备2026015392号`
- **审核通过日期**：`2026-03-31`
- **工信部查询链接**：[http://beian.miit.gov.cn/](http://beian.miit.gov.cn/)