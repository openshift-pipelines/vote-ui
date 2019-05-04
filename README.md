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

- [vote](./vote) holds the pipeline (and sources) of the well known
  vote app from dockercon and kubecon. It deploys openshift apps
  (using `oc`).
- [kqr-pay](./kqr-pay) holds the pipeline for
  [kqr-pay](https://github.com/markito/kqr-pay). It deploys knative
  services (using `knctl`).
