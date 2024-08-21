# WMS Public

Cet exemple montre comment charger une couche WMS dans OpenLayers. Dans cet exemple, les couches WMS sont chargées en tant que couche Image: c'est le mode de fonctionnement du géoportail.

En cas de couches WMS lourdes ou en cas de nombreuses couches chargées simultanément, il peut être intéressant de basculer sur une couche de type `TileLayer` permettant de bénéficier d'une mise en cache côté client.

[Plus d'infos sur le WMS](../API%20REST%20du%20SITN/WMS/)

```js reference title="/main.js"
https://github.com/sitn/sitn-docs/blob/master/examples/wms/main.js
```

```html reference title="/demo.html"
https://github.com/sitn/sitn-docs/blob/master/examples/wms/demo.html#L9-L13
```

```css reference title="/style.css"
https://github.com/sitn/sitn-docs/blob/master/examples/assets/style.css
```

<iframe
  width="100%"
  height="400px"
  src="https://sitn.ne.ch/services/examples/wms/demo.html">
</iframe>
