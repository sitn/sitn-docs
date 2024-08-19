# Recherche plein texte (FTS)

Idéal pour de l'autocomplétion, un service de recherche de texte (_Full text search_) sur objets géographiques est disponible à l'url suivante:

https://sitn.ne.ch/search

Les paramètres sont:

| Paramètre | Obligatoire? | Description | Exemple |
|-----------|--------------|-------------|---------|
| query | oui | Termes de recherche | `query=4512` |
| limit | non | Nombre maximum total de résultats | `limit=50` |
| partitionlimit | non | Nombre maximum de résultats par couche | `partitionlimit=10` |

### Résultat

Le résultat sera un GeoJSON contenant une FeatureCollection dont chaque Feature aura les propriétés suivantes:

| Propriété | Description | Exemple |
|-----------|-------------|---------|
| label | La désignation de l'objet trouvé | `2894 Couvet (EGRID : CH788008687793)` |
| layer_name | Le nom technique de la couche sur laquelle l'objet a été trouvé | `ImmeublesCanton` |
| actions | Liste d'actions à effectuer par l'application, surtout utile au géoportail | `{"action": "add_layer", "data": "ImmeublesCanton"}` |

:::tip

Les paramètres `limit` ou `partitionlimit` sont conseillés dans le cadre d'une utilisation en auto-complétion de saisie utilisateur. En effet, une recherche à un caractère telle que `1` ou `a` peut retourner énormément de résultats.

:::

### Exemple de requête

https://sitn.ne.ch/search?query=Tivoli%2022&limit=50
