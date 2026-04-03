#!/bin/bash

# Update
apt update -y

# Install Docker
apt install -y docker.io
systemctl start docker
systemctl enable docker

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Install Git
apt install -y git

# Clone your repo (CHANGE THIS)
git clone https://github.com/Saravjeet0806/devops_landing_saas.git
cd devops_landing_saas

# Run containers
docker-compose up --build -d