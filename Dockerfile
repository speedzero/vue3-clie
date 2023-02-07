FROM bitnami/nginx:1.18
WORKDIR /app
ENV port=8000

RUN sed -i -r "s|(\s+listen\s+)[0-9]+;|\1$port;|" /opt/bitnami/nginx/conf/nginx.conf
COPY proxy.conf /opt/bitnami/nginx/conf/bitnami/my.conf
COPY dist ./

