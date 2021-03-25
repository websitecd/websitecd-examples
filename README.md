# SPAship Examples

This repository contains various examples demonstrating how SPAship Operator can be used.

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
echo "$(minikube ip) minikube.info operator-spaship.minikube.info simple-dev-spaship-examples.minikube.info simple-prod-spaship-examples.minikube.info advanced-dev-spaship-examples.minikube.info advanced-prod-spaship-examples.minikube.info spa-restapi-mongo-dev-spaship-examples.minikube.info" | sudo tee -a /etc/hosts
```

Install the operator

```shell
kubectl create namespace spaship-operator
kubectl create configmap -n spaship-operator spaship-operator-config --from-literal=APP_OPERATOR_ROUTER_MODE=ingress --from-literal=APP_OPERATOR_WEBSITE_DOMAIN=minikube.info
kubectl apply -n spaship-operator -f https://raw.githubusercontent.com/spaship/operator/main/manifests/install.yaml
```

Now your cluster is ready to register any website. Follow instructions in particular website example.
