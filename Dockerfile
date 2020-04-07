# build stage
FROM node:12 as build-stage

# 镜像维护的作者
LABEL maintainer="1286612323@qq.com"

# 创建一个工作目录
WORKDIR /app

# 将代码拷贝到工作目录
COPY . .

# 安装依赖，使用淘宝源
RUN npm install --registry="https://registry.npm.taobao.org"

# 打包构建项目
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

# 将dist目录拷贝到ngnix目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]