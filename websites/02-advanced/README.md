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
