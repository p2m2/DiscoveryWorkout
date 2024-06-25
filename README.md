# TP Discovery Websempilot

- [Repository GitHub](https://github.com/p2m2/discovery)
- [Documentation GitHub Pages](https://p2m2.github.io/discovery/)

## Interfaces

- [SWDiscoveryHelperJs.scala](https://github.com/p2m2/discovery/blob/master/js/src/main/scala/fr/inrae/metabohub/semantic_web/SWDiscoveryHelperJs.scala)
- [SWDiscoveryJs.scala](https://github.com/p2m2/discovery/blob/master/js/src/main/scala/fr/inrae/metabohub/semantic_web/SWDiscoveryJs.scala)

## Features

- Programming/building request with immutable objects
- Querying several RDF contents (SPARQL Endpoint, RDF File, RDF content)
- Federated Query
- Handling lazy page results
- Subscribe to SPARQL query status events
- Stringify request and configuration to ease transport
- Decorating the building nodes with additional information

## TP

1. **Combien de composés CHEBI sont définis dans le fichier [triples_assos_CHEBI_MESH_sub.ttl](https://raw.githubusercontent.com/p2m2/tp-discovery-websempilot/main/rdf/triples_assos_CHEBI_MESH_sub.ttl)**

    - [View HTML](./exo1_inspect_rdf/count_1a.html)

2. **Le temps d'attente est relativement long. Nous pouvons actualiser une icône HTML et afficher le résultat lorsque la requête arrive à son terme.**

    - [View HTML](./exo1_inspect_rdf/count_1b.html)

3. **Combien de termes MeSH sont associés au composé [chebi:133719](http://purl.obolibrary.org/obo/CHEBI_133719)**

    - [View HTML](./exo1_inspect_rdf/count_2.html)

4. **Nous allons chercher des informations sur les termes D (TopicalDescriptor) en ajoutant une source (SPARQL Endpoint) et nous allons utiliser le "helper" de discovery pour inspecter les relations existantes autour des valeurs de `objetMeshTerm`.**

    - [View HTML](./exo1_inspect_rdf/count_3.html)

5. **Affichage des labels des descripteurs**

    - [View HTML](./exo2_html_view/view_1.html)

6. **Sélection d'une liste de descripteurs pour cibler les métabolites en relation en définissant un sous-graph RDF de sélection des descripteurs**

    - [View HTML](./exo2_html_view/view_2.html)

7. **Affichage des résultats dans un tableau HTML**

    - [View HTML](./exo2_html_view/view_3.html)

8. **Utilisation des "laziest results" pour l'affichage dans un tableau**

    - [View HTML](./exo2_html_view/view_4.html)

9. **Ajout d'une barre de progression lors de l'envoi d'une requête**

    - [View HTML](./exo2_html_view/view_5.html)

10. **Décoration d'un élément ressource de la requête et encodage de l'état de la requête dans une chaîne de caractères pour le transfert HTTP**

    - [View HTML](./exo3_export/export_1.html)

11. **Instanciation et utilisation de la requête à partir d'un encodage**

    - [View HTML](./exo3_export/export_2.html)
