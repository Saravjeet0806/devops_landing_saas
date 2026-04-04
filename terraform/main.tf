provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "my-sg" {
  name        = "my-sg"
  description = "Allow HTTP and SSH"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "devops_landing_saas" {
  ami           = "ami-0f5ee92e2d63afc18"
  instance_type = "t2.micro"
  key_name      = var.key_name

  vpc_security_group_ids = [aws_security_group.my-sg.id]

  tags = {
    Name = "devops_landing_saas"
  }

  # 🔑 Connection block (SSH details)
  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file(var.private_key_path)
    host        = self.public_ip
  }

  # 📂 Step 1: Upload script
  provisioner "file" {
    source      = "user-data.sh"
    destination = "/home/ubuntu/user-data.sh"
  }

  # ⚙️ Step 2: Execute script
  provisioner "remote-exec" {
    inline = [
      "chmod +x /home/ubuntu/user-data.sh",
      "sudo /home/ubuntu/user-data.sh"
    ]
  }
}