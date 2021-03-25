# Simple Website

A simple website containing two components:
1. homepage
2. theme

## Install website

```shell
kubectl create namespace spaship-examples
kubectl apply -n spaship-examples -f https://raw.githubusercontent.com/spaship/spaship-examples/main/websites/01-simple/deployment-simple-allenvs.yaml
```

### Local Live Development by Okteto

Install [okteto](https://okteto.com/docs/getting-started/installation).

Start Dev container
```shell
cd websites/01-simple
okteto up --namespace spaship-examples
```

Website is ready under `http://localhost:8080`.
Any change in `home` and `theme` directory is automatically synced to dev container.

## Delete website

```shell
kubectl delete -n spaship-examples websites.spaship.io simple
```
