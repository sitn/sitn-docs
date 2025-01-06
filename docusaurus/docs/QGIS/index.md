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
5. Dans la liste des couches, sélectionner la couche désirée (par exemple "ortho2022" qui contient l’orthophoto 2022), puis cliquer sur **Ajouter**. La nouvelle couche doit maintenant apparaître dans l’arbre de couches et sur la carte.

   ![image](https://github.com/user-attachments/assets/b2741a6d-8648-4910-b9a9-c45753b08f28)


## WMS

bientôt disponible...
