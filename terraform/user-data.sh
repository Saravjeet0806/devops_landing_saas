#!/bin/bash

set -e  # Exit immediately if any command fails

echo "Updating system..."
sudo apt update -y

echo "Installing Docker..."
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

echo "Installing Docker Compose (plugin)..."
sudo apt install -y docker-compose-plugin

echo "Installing Git..."
sudo apt install -y git

echo "Cloning repository..."
if [ ! -d "devops_landing_saas" ]; then
  git clone https://github.com/Saravjeet0806/devops_landing_saas.git
fi

cd devops_landing_saas

echo "Starting application using Docker Compose..."
sudo docker compose up --build -d

echo "Deployment completed successfully!"