# Example Voting App

A simple distributed application running across multiple containers.

## Infra

```bash
# creates postgresql and redis
oc create -f infra/
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
