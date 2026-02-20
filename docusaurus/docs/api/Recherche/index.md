# Recherche plein texte (FTS)

Idéal pour de l'autocomplétion, un service de recherche de texte (_Full text search_) sur objets géographiques est disponible à l'url suivante:

https://sitn.ne.ch/search

Les paramètres sont:

| Paramètre | Obligatoire? | Description | Exemple |
|-----------|--------------|-------------|---------|
| query | oui | Termes de recherche | `query=4512` |
| limit | non | Nombre maximum total de résultats | `limit=50` |
| partitionlimit | non | Nombre maximum de résultats par couche | `partitionlimit=10` |
| categories | non | Liste des couches dans lesquelles effectuer la recherche | `categories=adresses_sitn,ImmeublesCanton` |

Liste des catégories possibles:

| categories | Description |
|---|---|
| ImmeublesCanton                | Parcelles |
| search_satac                   | Permis de construire |
| adresses_sitn                  | Adresses cantonales |
| batiments_ofs                  | Bâtiments issus du RegBL |
| localite                       | Localités |
| nom_local_lieu_dit             | Noms locaux et lieux dits |
| search_arrets_tp               | Arrêts de transport public |
| search_cours_eau               | Cours d'eau |
| point_interet                  | Points d'intérêt |
| gsr002_guichet_social_regional | Guichets sociaux régionaux |
| search_uap_publique            | Unité d'aménagement publique (forêts) |
| search_fo_administrations      | Administrations forestières publiques |
| ImmeublesCantonHistorique      | Parcelles historiques |
| axe_rue                        | Noms de rue |
| axe_mistra                     | N° techniques d'axes routiers |
| search_conc_hydr               | Concessions hydrauliques |
| search_fo09                    | Secours en forêt |
| search_entree_sortie           | Entrée/sortie autoroute |
| rt16_giratoires                | Giratoires |
| rf_unite_juridique             | Unités juridiques du registre foncier |
| neophytes_infoflora            | Plantes invasives |
| search_alicad                  | Piles de bois |
| search_sante                   | Professionels de la santé |
| search_pru                     | Points de rencontre d'urgence |

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
