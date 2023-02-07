npm run build
harbor=10.10.102.213:8443
image=vue3-micro
namespace=micro-template
version=0.0.2
docker build -t $harbor/$namespace/$image:$version .
# 按需是否登陆harbor，是否推送镜像
harbor_password=Harbor12345
docker login $harbor --username admin --password $harbor_password
docker push $harbor/$namespace/$image:$version
