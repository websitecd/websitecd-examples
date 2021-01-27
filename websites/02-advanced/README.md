# Advanced Website

Website consists of multiple components.

To deploy `/search/api` use ArgoCD or simply
```shell
kubectl apply -n websitecd-examples -f searchapi/searchapi.yaml
```