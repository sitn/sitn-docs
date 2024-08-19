# Service WMS

Le service WMS du SITN est une implémentation REST du standard [WMS OGC](http://www.opengeospatial.org/standards/wms).

## GetCapabilities et liste des couches disponibles

L'URL du GetCapabilities est:
https://sitn.ne.ch/services/wms?SERVICE=WMS&REQUEST=GetCapabilities

Cette url permet d'obtenir la liste des couches disponibles et leurs paramètres (notamment le format d'image disponible).

:::tip

Chargez cette URL dans QGIS pour consulter la liste des couches de manière plus conviviale.

:::