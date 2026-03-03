# Docker 全栈学习路线图

你目前处于 **阶段二：全栈入门 (完成度 80%)**。

## 阶段一：基础概念 (已完成 ✅)
- [x] 理解镜像 (Image) vs 容器 (Container)
- [x] 编写 Dockerfile (FROM, WORKDIR, COPY, CMD)
- [x] 端口映射 (-p) 与后台运行 (-d)

## 阶段二：全栈开发环境 (已完成 ✅)
- [x] Docker Compose 多服务编排
- [x] Volume 挂载与热更新 (Nodemon)
- [x] 容器间网络通信 (Service Name)
- [x] 数据库持久化与连接
- [x] 使用 GUI 工具 (Adminer) 管理数据库

## 阶段三：工程化与运维 (Next Steps 🚀)
这个阶段是将你的 "Demo" 变成 "产品" 的关键。

### 1. 环境变量与配置管理 (Priority: High)
- **现状**: 数据库密码写死在代码里。
- **目标**: 使用 `.env` 文件管理敏感信息。
- **工具**: `dotenv`, `docker-compose --env-file`。

### 2. 容器优化 (Priority: Medium)
- **现状**: 镜像可能较大，构建速度一般。
- **目标**: 
  - 使用多阶段构建 (Multi-stage Build) 减小镜像体积。
  - 优化 Docker Layer 缓存。
  - `.dockerignore` 最佳实践。

### 3. 网络与安全 (Priority: Medium)
- **现状**: 所有端口都暴露在外面。
- **目标**: 
  - 理解 Docker Network (Bridge, Host)。
  - 只暴露必要的端口 (比如数据库端口不应该暴露给公网)。
  - 容器互联的安全策略。

## 阶段四：部署与进阶 (Future)
- [ ] **CI/CD**: 深入 GitHub Actions，实现自动化测试与部署。
- [ ] **反向代理**: 使用 Nginx 容器作为网关，配置 HTTPS (Let's Encrypt)。
- [ ] **日志监控**: 使用 ELK 或 Prometheus/Grafana 监控容器状态。
- [ ] **Kubernetes (K8s)**: 当你的容器数量达到几十个时，Docker Compose 就不够用了，这时就需要 K8s。

## 推荐练习项目
1. **TodoList 全栈版**: 
   - 前端: Vue/React
   - 后端: Node.js/NestJS
   - 数据库: MySQL/PostgreSQL
   - 缓存: Redis (尝试添加 Redis 服务)
2. **个人博客系统**:
   - 尝试将 WordPress + MySQL 容器化部署。
