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
