# Nginx Web Server and Load Balancer with Docker

This project demonstrates a basic setup of Nginx web servers and a load balancer using Docker and Docker Compose. The load balancer distributes incoming traffic to two Nginx web servers. This setup is configured using Docker Compose, which allows all three services to be started with a single command.


### Prerequisites

   - Docker
   - Docker Compose

### Project Structure

    nginx.conf.webserver: Nginx configuration for the web servers
    nginx.conf.loadbalancer: Nginx configuration for the load balancer
    Dockerfile.webserver: Dockerfile for building the web server Docker image
    Dockerfile.loadbalancer: Dockerfile for building the load balancer Docker image
    docker-compose.yml: Docker Compose file for starting the application
    index.html, js/, css/: Static content for the web servers

### Getting Started

To start the application, run the following command in the root directory of the project:

```bash

docker-compose up
```

After the application starts, you can access the web application through a browser by navigating to:

```bash

http://localhost:80
```

This will load balance the requests between the two Nginx web servers running on Docker.

To stop the application, run the following command in the root directory of the project:

```bash

docker-compose down
```

This will stop all running services defined in docker-compose.yml.

### word-counter

#### Phone
<img width="399" alt="Screenshot 2023-06-10 at 14 00 12" src="https://github.com/classValentin/word-counter/assets/76632023/89a64b72-f765-4f52-b234-364ab524b7c8">

#### Desktop
<img width="1799" alt="Screenshot 2023-06-10 at 14 01 10" src="https://github.com/classValentin/word-counter/assets/76632023/46a8e97d-25e6-4328-b551-3431632744cb">

Dieses Projekt macht eine Word-Counter Website via nginx reverse proxy & zwei nginx webservern via Docker verfügbar.

Um das Projekt zu verwenden, muss der folgende Befehl ausgeführt werden:

    docker compose up

Wenn alles geklappt hat, sollte die Website unter 127.0.0.1:80 verfügbar sein.
