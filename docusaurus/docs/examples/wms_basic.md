# WMS et CDN

L'exemple montre comment charger une couche WMS avec OpenLayers, sans utiliser l'environnement d'exécution Node.js et le transpileur Vite. 

En cas de couches WMS lourdes ou en cas de nombreuses couches chargées simultanément, il peut être intéressant de basculer sur une couche de type `TileLayer` permettant de bénéficier d'une mise en cache côté client. Cet exemple le démontre. 

[Plus d'infos sur le WMS](../api/WMS/)

```html reference title="/demo.html"
https://github.com/sitn/sitn-docs/blob/master/examples/wms_basic/demo.html
```

<iframe
  width="100%"
  height="400px"
  src="https://sitn.ne.ch/services/examples/wms_basic/demo.html">
</iframe>
