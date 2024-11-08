# Documentation SITN - website

This project is divided into 2 parts:
- docusaurus documentation
- live examples

Each part is managed separately by two distincts package.json

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
python deploy
```

## Contribute

If you want to add a live-example to the documentation, best is to start in the examples directory:

1. Create a folder containing your example
2. Reference it in `/index.html`
3. Reference it in `/vite.config.js` in the `input` section
4. Publish your code to GitHub and deploy examples container
5. You are now able to include the github code in your markdown and a live exemple as an iframe
