# WMTS avec résolutions contraintes

Il est possible de définir les paramètres des couches WMTS manuellement. Cela apporte deux avantages significatifs:
- Performance: le téléchargement et la lecture du fichier xml du GetCapabilities n'est pas nécessaire
- Qualité: les niveaux de zoom (resolutions) étant prédéfinis, OpenLayers zoomera à la même résolution que celle des imagettes WMTS rendant un résultat net

[Plus d'infos sur le WMTS](../api/WMTS/)

```js reference title="/main.js"
https://github.com/sitn/sitn-docs/blob/master/examples/wmts-plain/main.js
```

```html reference title="/demo.html"
https://github.com/sitn/sitn-docs/blob/master/examples/wmts-plain/demo.html#L9-L13
```

```css reference title="/style.css"
https://github.com/sitn/sitn-docs/blob/master/examples/assets/style.css
```

<iframe
  width="100%"
  height="400px"
  src="https://sitn.ne.ch/services/examples/wmts-getcapabilities/demo.html">
</iframe>
