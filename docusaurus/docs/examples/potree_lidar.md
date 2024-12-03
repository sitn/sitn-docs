# Visualisation de points Lidar via Potree

Cet exemple démontre comment instantier le visualisateur Potree du SITN localement. 

Étant donné le caractère particulier de cet example, tout d'abord il est nécessaire de clone le répertoire github de [Potree](https://github.com/potree/potree/tree/develop) afin d'accèder aux packages et aux fichiers de configuration nécessaire.     
Il est aussi nécessaire d'avoir Node.js installé. 

```console 
git clone https://github.com/potree/potree.git potree
cd potree 
npm install 
```

Afin d'accèder aux données LiDAR du SITN, il est nécessaire d'ajouter les scripts suivants au dossier

```js reference title="/main.js"
https://github.com/sitn/sitn-docs/blob/master/examples/potree/main.js
```

```html reference title="/demo.html"
https://github.com/sitn/sitn-docs/blob/master/examples/potree/demo.html
```

<iframe
  width="100%"
  height="400px"
  src="http://localhost:5173/services/examples/potree/demo.html">
</iframe>
