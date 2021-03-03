# Website CD Examples

This repository contains various examples demonstrating how Website CD can be used.

| Application | Description |
|-------------|-------------|
| [simple](websites/01-simple) | Simple static website with 2 components |
| [advanced](websites/02-advanced) | Advanced example using shared components and shared layout |
| [spa-restapi-mongo](websites/03-spa-restapi-mongo) | SPA with real REST API backed by Mongo DB |

## How to run on minikube

```shell
minikube config set driver hyperkit
minikube config set memory 8192
minikube config set cpus 4
minikube start --addons ingress,dashboard
```

Make available examples domains
```shell
echo "$(minikube ip) minikube.info operator-websitecd.minikube.info simple-dev-websitecd-examples.minikube.info simple-prod-websitecd-examples.minikube.info advanced-dev-websitecd-examples.minikube.info advanced-prod-websitecd-examples.minikube.info spa-restapi-mongo-dev-websitecd-examples.minikube.info" | sudo tee -a /etc/hosts
```

Install the operator

```shell
kubectl create namespace websitecd
kubectl create configmap -n websitecd websitecd-operator-config --from-literal=APP_OPERATOR_ROUTER_MODE=ingress --from-literal=APP_OPERATOR_WEBSITE_DOMAIN=minikube.info
kubectl apply -n websitecd -f https://raw.githubusercontent.com/websitecd/operator/main/manifests/install.yaml
```

Now your cluster is ready to register any website. Follow instructions in particular website example.
