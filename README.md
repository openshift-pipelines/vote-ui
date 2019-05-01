# Openshift Pipeline examples

## Prepare the project

```bash
oc new-project pipeline-demo

oc create serviceaccount pipeline
oc adm policy add-scc-to-user privileged -z pipeline
oc adm policy add-role-to-user edit -z pipeline
```

## Deploy some samples

Each subfoler of this project has examples that can be run against
Openshift pipelines (or upstream Tekton Pipeline too)

- [vote](./vote) holds the well known vote app from dockercon and kubecon
