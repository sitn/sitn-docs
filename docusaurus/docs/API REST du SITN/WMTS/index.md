# WMTS

Le service WMTS du SITN est une implémentation REST du standard [WMTS OGC](http://www.opengeospatial.org/standards/wmts).

## GetCapabilities et liste des couches disponibles

L'URL du GetCapabilities est:
https://sitn.ne.ch/services/wmts?SERVICE=WMTS&REQUEST=GetCapabilities

Cette url permet d'obtenir la liste des couches disponibles et leurs paramètres (notamment le format d'image disponible).

:::tip

Chargez cette URL dans QGIS pour consulter la liste des couches de manière plus conviviale.

:::

## Résolutions disponibles

Les résolutions (taille en mètres d'un pixel) suivantes sont disponible:

250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125
