# Website CD Example / Simple

A simple website containing two components:
1. homepage
2. theme

## Install website

```shell
kubectl create namespace websitecd-examples
kubectl apply -n websitecd-examples -f https://raw.githubusercontent.com/websitecd/websitecd-examples/main/websites/01-simple/deployment-simple-allenvs.yaml
```

### Local Live Development by Okteto

Install [okteto](https://okteto.com/docs/getting-started/installation).

Start Dev container
```shell
cd websites/01-simple
okteto up --namespace websitecd-examples
```

Website is ready under `http://localhost:8080`.
Any change in `home` and `theme` directory is automatically synced to dev container.

## Delete website

```shell
kubectl delete -n websitecd-examples websites.websitecd.io simple
```