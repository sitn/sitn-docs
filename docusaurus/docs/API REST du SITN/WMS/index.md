# WMS

Le service WMS du SITN est une implémentation REST du standard [WMS OGC](http://www.opengeospatial.org/standards/wms).

Le service WMS est complémentaire du service WMTS. On y trouvera les couches métiers que l'on de considère généralement pas comme des couches de fonds de plan.

:::tip

Toutes les couches du géoportail ne sont pas par défaut accessibles sur le service WMS public. Si vous avez besoin d'une couche et que celle-ci ne figure pas sur le WMS public, n'hésitez pas à nous contacter.

:::

## GetCapabilities et liste des couches disponibles

L'URL du GetCapabilities est:
https://sitn.ne.ch/services/wms?SERVICE=WMS&REQUEST=GetCapabilities

Cette url permet d'obtenir la liste des couches disponibles et leurs paramètres (notamment le format d'image disponible).

:::tip

Chargez cette URL dans QGIS pour consulter la liste des couches de manière plus conviviale.

:::