# Langchain Components

Contain Nodes and Credentials.
## Note

NEVER merge `develop` branch to the `main` branch. The main branch is to regularly patch/pull updates from [Flowise](https://github.com/FlowiseAI/Flowise) repo. Carefully follow the `Steps to deploy` section below.

## Instal

```bash
yarn add git+https://github.com/AI-NOMIS/langchain-components-v2.git#v1.0.0
```

## Steps to deploy

- run `yarn build` -> to make sure there are no build and type errors
- commit and push your changes
- create a new tag by adding 0.0.1 to the previous version (NOTE: if your changes are major update then change 1. to 2.) and push your tage
- go to [`nocodingai_backend`](https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/nocodingai_backend) repo and update `flowise-components` package's tag version
- deploy `nocodingai_backend`

## License

Source code in this repository is made available under the [Apache License Version 2.0](https://github.com/FlowiseAI/Flowise/blob/master/LICENSE.md).
