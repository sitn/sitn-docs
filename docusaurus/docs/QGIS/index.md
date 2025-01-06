# QGIS et les services web du SITN

## Extension GeoMapFish Locator

L'extension GeoMapFish Locator permet d'effectuer des recherches textuelles (p. ex. pour localiser une rue, un bâtiment, un point d'intérêt, etc) dans le canton de Neuchâtel via le service web du SITN.

1. Dans QGIS, pour installer l'extension GeoMapFish Locator, ouvrir le menu **Extensions** > **Installer/Gérer les extensions**. Dans la barre de recherche de la fenêtre, indiquer "Geomapfish Locator", puis sur la page de l'extension cliquer sur le bouton **Installer l'extension**.
   
   ![image](https://github.com/user-attachments/assets/a4ccbc5a-a9a4-477c-ac0b-4322396cc3ae)

2. Pour ajouter le service de recherche plein texte du SITN dans l'extension, aller dans le menu **Extensions** > **Geomapfish Locator Filters** > **Add new service**. Indiquer un nom (par exemple "SITN search"), l'URL [https://sitn.ne.ch/search](https://sitn.ne.ch/search) et le système de coordonnées CH1903+/LV95 (EPSG:2056). Cliquer sur le bouton **OK**

   ![image](https://github.com/user-attachments/assets/2762ecbd-5929-41e6-8c7a-98577c2b4c2c)

3. Pour effectuer une recherche, écrire le terme cherché (p. ex. "Port de serrières") dans la barre de recherche en bas à gauche. Une liste résultats doit apparâitre en-dessus.

   ![image](https://github.com/user-attachments/assets/b53adacf-8986-4b55-85db-8b4052e66183)

## WMTS

Pour configurer une connexion au service WMTS de fonds de carte du SITN (à faire une fois seulement):

1. Dans QGIS, ouvrir le menu **Couche** > **Ajouter une couche** > **Ajouter une couche WMS/WMTS**
2. Dans la fenêtre **Gestionnaire de sources de données | WMS | WMTS**, cliquer sur le bouton **Nouveau**.
3. Dans la fenêtre **Créer une Nouvelle Connexion WMS/WMTS**, donner un nom à la connexion (par exemple "SITN WMTS") et indiquer l’URL [https://sitn.ne.ch/services/wmts?SERVICE=WMTS&REQUEST=GetCapabilities](https://sitn.ne.ch/services/wmts?SERVICE=WMTS&REQUEST=GetCapabilities), puis cliquer sur **OK**.

   ![image](https://github.com/user-attachments/assets/8361f19f-5e48-4537-acfb-9bd14adc352b)

4. Cliquer sur le bouton **Connexion** et lorsque la connexion au service WMTS est ouverte, vous verrez la liste des couches disponibles.
5. Dans la liste des couches, sélectionner la couche désirée (par exemple "ortho2022" qui contient l’orthophoto 2022), puis cliquer sur **Ajouter**  et fermer la fenêtre. La nouvelle couche WMTS doit maintenant apparaître dans l’arbre des couches et sur la carte.

   ![image](https://github.com/user-attachments/assets/b2741a6d-8648-4910-b9a9-c45753b08f28)


## WMS

Pour configurer une connexion au service WMS de fonds de carte du SITN (à faire une fois seulement):

1. Dans QGIS, ouvrir le menu **Couche** > **Ajouter une couche** > **Ajouter une couche WMS/WMTS**
2. Dans la fenêtre **Gestionnaire de sources de données | WMS | WMTS**, cliquer sur le bouton **Nouveau**.
3. Dans la fenêtre **Créer une Nouvelle Connexion WMS/WMTS**, donner un nom à la connexion (par exemple "SITN WMS") et indiquer l’URL [https://sitn.ne.ch/services/wms](https://sitn.ne.ch/services/wms), puis cliquer sur **OK**.

   ![image](https://github.com/user-attachments/assets/309f9ed8-5cd1-4f40-a039-cc59d015e9fb)

4. Cliquer sur le bouton **Connexion** et lorsque la connexion au service WMS est ouverte, vous verrez la liste des couches disponibles.
5. Dans la liste des couches, sélectionner la couche désirée (par exemple "at073_chmins_vtt" qui les chemins pour VTT), indiquer les options desirées (par exemple un encodage de l'image en JPEG, une taille de tuille 200x200 et le système de référence EPSG:2056 - CH103+/LV95), puis cliquer sur **Ajouter** et fermer la fenêtre. La nouvelle couche WMS doit maintenant apparaître dans l’arbre des couches et sur la carte.

   ![image](https://github.com/user-attachments/assets/70860c2a-2eab-478e-aadb-61408a250a82)


