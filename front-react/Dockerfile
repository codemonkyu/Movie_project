# base image
## 현재 노드 이미지 가져오기
FROM node:14.15.1 as build

# Conventional working directory
## 디렉토리만들기
run mkdir /usr/src/app

# set working directory
#workdir로 세팅
WORKDIR /usr/src/app

# exposing all our Node.js binaries
## 환경변수 추가
env PATH /usr/src/app/node_modules/.bin:$PATH

# Copy package.json
## 패키지 json 복사
copy package.json /usr/src/app/package.json

# install dependency
## 버젼 맞춰주기 (react scripts)
RUN npm install --silent && npm install react-scripts@5.0.1 -g --silent

# add app
copy . /usr/src/app

# start and/or build app
RUN npm run build

FROM nginx:1.21.1

# Remove default nginx static resources
## nignx 기본 default.conf 삭제
RUN rm /etc/nginx/conf.d/default.conf

#copies React to the container directory
## 새로운 nginx.conf 복사
COPY nginx/nginx.conf /etc/nginx/conf.d

# Set working directory to nginx resources directory
## build 폴더 밑에 nginx폴더 만들어서 복사한 파일 -> nginx에 넣어주기
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]