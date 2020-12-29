$ docker ps // 查看所有正在运行容器

$ docker stop containerId // containerId 是容器的ID

$ docker ps -a // 查看所有容器 $ docker ps -a -q // 查看所有容器ID

$ docker stop $(docker ps -a -q) //  stop停止所有容器

$ docker rm $(docker ps -a -q) //   remove删除所有容器



docker build -t portal:1.0  //-t打标签
docker tag portal:1.0 harbor-registry.inner.youdao.com/zhixue/portal:1.0  //tag 绑定仓库
docker push harbor-registry.inner.youdao.com/zhixue/portal:1.0 //推送仓库