dockerexample
=============

Exemplo de NodeJS APP com Docker 

Update docker container
=======================

cd [path/to/dockerexample]

sudo docker build --no-cache -t george/nodejsapp .


Run docker container
====================

sudo docker stop nodejsapp - if container is running

sudo docker rm nodejsapp - if container is running

sudo docker run -p 80:8080 --name nodejsapp -d george/nodejsapp