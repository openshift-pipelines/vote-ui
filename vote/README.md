# Example Voting App

A simple distributed application running across multiple containers.

## Apps

```
oc create -f apps
oc new-app -e POSTGRESQL_USER=postgres -e POSTGRESQL_PASSWORD=postgres -e POSTGRESQL_DATABASE=voting postgresql
oc new-app redis
```

## Build pipeline

```bash
oc create -f tasks
oc create -f pipelines/resources.yml
oc create -f pipelines/build-pipeline.yml
oc create -f pipelines/build-pipeline-run.yml
```

## Deploy pipeline

```bash
oc create -f tasks
oc create -f pipelines/resources.yml
oc create -f pipelines/deploy-pipeline.yml
oc create -f pipelines/deploy-pipeline-run.yml
```
