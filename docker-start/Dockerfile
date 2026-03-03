# 使用 Nginx 的官方轻量级镜像作为基础
FROM nginx:alpine

# 将我们本地的 html 文件复制到 Nginx 容器内的默认服务目录
# 类似于 npm build 后的产物部署
COPY index.html /usr/share/nginx/html/index.html

# 暴露 80 端口 (虽然 Nginx 默认就是 80，但写出来更清晰)
EXPOSE 80
