# Documentation SITN - website

This project is divided into 2 parts:
- docusaurus documentation
- live examples

Each part is managed seraparatly by two distincts package.json

## Run docusaurus

```powershell
cd docusaurus
npm i
npm start
```

## Run live examples

```powershell
cd examples
npm i
npm start
```

## Deploy

```powershell
$env:DOCKER_HOST="ssh://<user>@<server>.ne.ch"
docker compose up -d
```
