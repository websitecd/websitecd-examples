# Advanced Website

Website consists of multiple components which uses SSI to render the common header/footer.

To deploy `/search/api` use ArgoCD or simply
```shell
kubectl apply -n websitecd-examples -f searchapi/searchapi.yaml
```

## Install website

```shell
kubectl create namespace websitecd-examples
kubectl apply -n websitecd-examples -f https://raw.githubusercontent.com/websitecd/websitecd-examples/main/websites/02-advanced/deployment-advanced-preprodonly.yaml
```

### Local Live Development by Okteto

Install [okteto](https://okteto.com/docs/getting-started/installation).

Start Dev container
```shell
cd websites/02-advanced
okteto up --namespace websitecd-examples
```

Website is ready under `http://localhost:8080`.
Any change in `home` and `theme` directory is automatically synced to dev container.

## Delete website

```shell
kubectl delete -n websitecd-examples websites.websitecd.io simple
```
