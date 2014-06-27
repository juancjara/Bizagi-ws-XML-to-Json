Bizagi-ws-XML-to-Json
=====================

Nodejs server which acts as a middleware converting bizagi's web service exposed data in xml format to json format.

Quick explanation:

 - EA = External app
 - M = middleware
 - B = bizagi soa


  EA request(json)   ===== 1 ====>    M   json -> xml     ====== 2 ======>   B  request(xml)

  EA response(json)  <==== 4 ====     M   json <- xml     <===== 3 =======   B  reponse(xml)


Available web services:

  - getActivities
  - createCases
  - performActivity
  - getEntities


Contact me if you want a user guide or more web services.

Servidor de Bizagi xml to Json
===================

Este servidor desarrollado en Nodejs permite consumir los servicios web de bizagi usando json y obtener la respuesta de bizagi a través de un json. El json se transforma a xml por este middleware para ser enviado a Bizagi SOA , luego la respuesta en xml se obtiene y se transforma a Json.

Actualmente se tienen mapeados estos servicios web:
  - getActivities
  - createCases
  - performActivity
  - getEntities

Contactarme si desean más servicios web mapeados o ayuda sobre cómo usar este servidor
