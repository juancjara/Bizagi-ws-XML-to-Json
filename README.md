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
