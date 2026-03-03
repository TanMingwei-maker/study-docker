# 使用华为云镜像源加速
FROM swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/library/node:18-alpine

# 设置工作目录
# 类似于 cd /app，之后的所有命令都会在这个目录下执行
# 这是一个非常重要的最佳实践，避免污染根目录
WORKDIR /app

# 先复制 package.json 和 package-lock.json
# 为什么不直接 COPY . . ？
# 因为 Docker 有缓存机制。如果 package.json 没变，Docker 会直接使用缓存的 node_modules
# 这样每次修改代码时，就不需要重新 npm install 了，构建速度会飞快！
COPY package*.json ./

# 安装依赖
# 建议在生产环境使用 npm ci (clean install)
RUN npm install --registry=https://registry.npmmirror.com

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
# CMD 指定容器启动时默认执行的命令
CMD ["node", "index.js"]