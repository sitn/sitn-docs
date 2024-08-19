# Service web de traduction

Les noms des tables, couches WMS ou WMTS ainsi que les noms des colonnes ou champs de données sont des noms techniques. Par exemple `at034_autorisation_construire_apres`

Afin de traduire uniformément ces termes sur toutes les plateformes où la géodonnée est diffusée, le SITN met à disposition un service web de traduction.

L'url est:

https://sitn.ne.ch/static/0/fr.json

La réponse sera un dictionnaire JSON dont la clé sera la langue souhaitée (pour l'instant, seul le français est disponible). Chaque langue contient un dictionnaire de clés: valeurs où chaque clé est le terme à traduire et la valeur est la traduction.

Exemple:

```json
"at034_autorisation_construire_apres": "Aut. construire - enquête terminée"
```
