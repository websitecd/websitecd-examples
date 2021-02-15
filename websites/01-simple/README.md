# Website CD Example / Simple

A simple website containing two components:
1. homepage
2. theme

## Install website

```shell
kubectl create namespace websitecd-examples
kubectl apply -n websitecd-examples -f https://raw.githubusercontent.com/websitecd/websitecd-examples/main/websites/01-simple/deployment-simple-allenvs.yaml
```
