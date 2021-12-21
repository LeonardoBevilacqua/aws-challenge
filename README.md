# Getting started

## Setup Client

Access the client folder and install the dependencies:
```bash
cd client
npm install
```

Start the frontend client:
```bash
npm start
```

## Setup Database (Docker MySql)

Download the _MySql_ container:
```bash
docker pull mysql
```

Create the container with password and database:
```bash
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=awschallenge -d mysql
``` 

Start, get logs and access the container (when needed):

```bash
docker start mysql # start
docker exec -it mysql bash # access
docker logs mysql # logs
```

## Setup Server

Access the server folder and install the dependencies:
```bash
cd server
npm install
```

Start the backend client:
```bash
npm start
```