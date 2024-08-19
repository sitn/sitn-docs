FROM node:20.16-alpine as builder
WORKDIR /usr/app
ENV PATH=${PATH}:./node_modules/.bin
ENV NODE_PATH=/usr/app/node_modules
COPY package.json package-lock.json ./
RUN npm install --loglevel=error --no-audit
COPY . .
RUN npm run build

### Run apache server ###
FROM httpd:alpine
RUN rm -r /usr/local/apache2/htdocs/*
COPY --from=builder /usr/app/build/ /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/
