#sudo docker build --no-cache -t george/nodejsapp .
sudo docker build -t george/nodejsapp .
sudo docker stop nodejsapp
sudo docker rm nodejsapp
sudo docker run -p 80:8080 --name nodejsapp -d george/nodejsapp