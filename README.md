# Tp Discovery Websempilot

https://github.com/p2m2/discovery
https://p2m2.github.io/discovery/

## interfaces

 - https://github.com/p2m2/discovery/blob/master/js/src/main/scala/fr/inrae/metabohub/semantic_web/SWDiscoveryHelperJs.scala
 - https://github.com/p2m2/discovery/blob/master/js/src/main/scala/fr/inrae/metabohub/semantic_web/SWDiscoveryJs.scala

## features

    Programming/building request with immutables objects
    Querying several RDF content (SPARQL Endpoint, RDF File, RDF content)
    Federated Query
    Handling lazy page results
    Subscribe to SPARQL query status events
    Stringify request and configuration to ease transport
    Decorating the building nodes with additional information

## TP 

- 1) Combien de composés CHEBI sont définit dans le fichier [triples_assos_CHEBI_MESH_sub.ttl](https://raw.githubusercontent.com/p2m2/tp-discovery-websempilot/main/rdf/triples_assos_CHEBI_MESH_sub.ttl)
    [view html](./exo1_inspect_rdf/count_1.html)

- 2) Le temps d'attente est relativement long. Nous pouvons actualiser une icone html et afficher le resultat lorsque le résultat de la requête arrive à son terme.
    [view html](./exo1_inspect_rdf/count_1b.html)

- 3) Combien de termes MeSH sont associés au composé [chebi:133719](http://purl.obolibrary.org/obo/CHEBI_133719)
    [view html](./exo1_inspect_rdf/count_2.html)

- 4) Nous allons chercher des informations sur les termes D (TopicalDescriptor) en ajoutant une source (sparqlEndpoint) et nous allons nous aider du "helper" de discovery pour inspecter les relations existantes autours des valeurs de `objetMeshTerm`.
    [view html](./exo1_inspect_rdf/count_3.html)

- 5) Affichage des labels des descripteurs
    [view html](./exo1_inspect_rdf/count_4.html)
