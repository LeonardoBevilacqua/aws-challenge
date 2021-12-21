Get the container

`docker pull mysql`

Create the container

`docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=awschallenge -d mysql` 

Start the container

`docker start mysql`

Access the container

`docker exec -it mysql bash`

Get logs

`docker logs mysql`
