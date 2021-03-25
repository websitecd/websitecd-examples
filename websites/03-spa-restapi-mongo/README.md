# SPA + RESTAPI + Mongo Website

Website consists Shared component (header,footer), SPA, REST API and Mongo DB

## Install website

```shell
kubectl create namespace spaship-examples
# REST API + Mongo
kubectl apply -n spaship-examples -f https://raw.githubusercontent.com/spaship/spaship-examples/main/websites/03-spa-restapi-mongo/searchapi/k8s.yaml
# Website
kubectl apply -n spaship-examples -f https://raw.githubusercontent.com/spaship/spaship-examples/main/websites/03-spa-restapi-mongo/deployment-preprodonly.yaml
```

The website is available under [http://spa-restapi-mongo-dev-spaship-examples.minikube.info](http://spa-restapi-mongo-dev-spaship-examples.minikube.info/)


### Local Live Development by Okteto

Install [okteto](https://okteto.com/docs/getting-started/installation).

#### Website

Start Dev container
```shell
cd websites/03-spa-restapi-mongo
okteto up -n spaship-examples
```

Website is ready under `http://localhost:8080`.
Any change to all components are automatically synced to dev container.

#### REST API

Start Dev container
```shell
cd websites/03-spa-restapi-mongo/searchapi
okteto up -n spaship-examples
```
Now your terminal is attached to dev container and 
```shell
 ✓  Development container activated
 ✓  Connected to your development container
 ✓  Files synchronized
    Namespace: spaship-examples
    Name:      searchapi-mongo
    Forward:   4000 -> 4000
               9229 -> 9229
               27017 -> mongodb:27017

Welcome to your development container. Happy coding!
spaship-examples:searchapi-mongo app>
```

Now your terminal is your dev container in k8s.

```shell
npm install
nodemon
```

Ports are forwarded to localhost and your API is under `4000` port and mongodb under `27017`.

To use api:
```shell
curl -X POST -H "Content-Type: application/json" http://localhost:4000/search/api/students -d '{"name":"Student 1" }'
curl http://localhost:4000/search/api/students
```

More info: [Okteto NodeJS Example](https://okteto.com/docs/samples/node).

### REST API Docker

```shell
docker build -t spaship/examples-03-searchapi .
docker push spaship/examples-03-searchapi
```


## Delete website

```shell
kubectl delete -n spaship-examples websites.spaship.io spa-restapi-mongo
kubectl delete namespace spaship-examples
```
