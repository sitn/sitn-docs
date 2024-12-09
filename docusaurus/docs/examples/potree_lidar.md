# Visualisation de points Lidar via Potree

Cet exemple démontre comment instantier le visualisateur Potree du SITN localement.  
Les scripts suivant se servent du "build" Potree du SITN accessible sur le serveur. 
  

```js reference title="/main.js"
https://github.com/sitn/sitn-docs/blob/master/examples/potree/main.js
```

```html reference title="/demo.html"
https://github.com/sitn/sitn-docs/blob/master/examples/potree/demo.html
```

Il est aussi possible de créer votre propre build en clonant le répertoire github de [Potree](https://github.com/potree/potree/tree/develop) afin d'accèder aux packages et aux fichiers de configuration nécessaire. Il sera nécessaire d'avoir Node.js installé.   

Vous pouvez ensuite ensuite insérer les fichiers ci-dessus dans le folder potree en changeant les chemins pour les imports des scripts. 
Les scripts sitnapp ne seront cependant pas disponible localement. 

```console 
git clone https://github.com/potree/potree.git potree
cd potree 
npm install 
```

À partir de là, il vous est désormais possible d'accèder aux exemples de Potree localement, une fois que le projet est initialisé.
```console 
npm start
```
<iframe
  width="100%"
  height="400px"
  src="https://sitn.ne.ch/services/examples/potree/demo.html">
</iframe>
