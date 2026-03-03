#!/bin/bash

# 加载环境变量
if [ -f .env.prod ]; then
    export $(cat .env.prod | grep -v '^#' | xargs)
else
    echo "错误: 找不到 .env.prod 文件，请先配置！"
    exit 1
fi

echo "🚀 开始模拟生产环境部署..."

# 1. 拉取最新镜像
echo "📥 正在从 Docker Hub 拉取最新镜像..."
docker-compose -f docker-compose.prod.yml pull

# 2. 停止并移除旧容器
echo "🛑 停止旧容器..."
docker-compose -f docker-compose.prod.yml down

# 3. 启动新容器
echo "🔥 启动新容器..."
docker-compose -f docker-compose.prod.yml up -d

echo "✅ 部署完成！"
echo "请访问 http://localhost (注意不是 8080，生产环境通常用 80 端口)"
