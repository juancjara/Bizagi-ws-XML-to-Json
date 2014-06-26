Bizagi-ws-XML-to-Json
=====================

Nodejs server which acts as a middleware converting bizagi's web service exposed data in xml format to json format.

Quick explanation:

  Extern App                            Middleware                            Bizagi SOA
  request(json)   ===== 1 ====>       json -> xml     ====== 2 ======>        request(xml)
  response(json)  <==== 4 ====        json <- xml     <===== 3 =======       reponse(xml)


Available web services:

  - getActivities
  - createCases
  - performActivity
  - getEntities


Contact me if you want a user guide or more web services.
