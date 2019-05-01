# Example Voting App

A simple distributed application running across multiple containers.

## Voting app build pipeline

```bash
oc create -f tasks
oc create -f pipelines/resources.yml
oc create -f pipelines/build-pipeline.yml
oc create -f pipelines/build-pipeline-run.yml
```
