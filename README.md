Here's a comprehensive `README.md` file for your Kubernetes deployment project with all the details properly formatted in Markdown:

```markdown
# Cloud Native Application Development - Kubernetes Deployment

## Project Overview
This project demonstrates the deployment of a containerized Node.js application to a Kubernetes cluster as part of the SIT323/SIT737 Cloud Native Application Development unit.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Application Components](#application-components)
- [Deployment Steps](#deployment-steps)
- [Kubernetes Configuration](#kubernetes-configuration)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)
- [Cleanup](#cleanup)
- [Screenshots](#screenshots)
- [References](#references)

## Prerequisites

### Software Requirements
| Tool | Purpose | Installation Link |
|------|---------|------------------|
| Docker Desktop | Containerization platform | [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop) |
| Kubernetes CLI (kubectl) | Kubernetes command-line tool | [https://kubernetes.io/docs/tasks/tools/](https://kubernetes.io/docs/tasks/tools/) |
| Minikube | Local Kubernetes cluster | [https://minikube.sigs.k8s.io/docs/start/](https://minikube.sigs.k8s.io/docs/start/) |
| Node.js | JavaScript runtime | [https://nodejs.org/](https://nodejs.org/) |
| Visual Studio Code | Code editor | [https://code.visualstudio.com/](https://code.visualstudio.com/) |
| Git | Version control | [https://git-scm.com/](https://git-scm.com/) |

### Accounts Required
- Docker Hub account for container registry
- GitHub account for code repository

## Project Structure

```
sit737-2025-prac6p/
├── Dockerfile            # Container configuration
├── deployment.yaml       # Kubernetes deployment manifest
├── service.yaml          # Kubernetes service manifest
├── index.js              # Node.js application code
├── healthcheck.js        # Health check implementation
├── package.json          # Node.js dependencies
├── package-lock.json     # Dependency lock file
└── README.md            # Project documentation
```


## Deployment Steps

### 1. Clone the Repository
```bash
git clone https://github.com/qasimnasir/sit737-2025-prac6p.git
cd sit737-2025-prac6p
```

### 2. Build Docker Image
```bash
docker build -t qasimnasir/sit737-node-app .
Replace with your docker username
```

### 3. Push to Docker Hub
```bash
docker push qasimnasir/sit737-node-app
Replace with your docker username
```

### 4. Start Minikube Cluster
```bash
minikube start
```

### 5. Deploy to Kubernetes
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### 6. Verify Deployment
```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

### 7. Access the Application
```bash
minikube service node-app-service
```


## Verification

### Check Pod Status
```bash
kubectl get pods -o wide
```

### View Pod Logs
```bash
kubectl logs <pod-name>
```

### Check Service Details
```bash
kubectl describe service node-app-service
```

### Test Application Endpoints
```bash
curl http://$(minikube ip):30036
curl http://$(minikube ip):30036/health

Replace with your IPs```
