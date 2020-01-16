# TCXC Pre-built Applications using Programmable-X API.



# FRONTEND APP

1. create .env by copying .env.example 
2. populate environment variables


* run this command or put this in package.json

TELE_USER_NAME=BUYERUSERNAME TELE_USER_PASSWORD=API-KEY node app.js




# SERVER APP

Local Setup

  set PROCESS.ENV VARIABLE
    TELE_USER_NAME, TELE_USER_PASSWORD

* run this command or put this in package.json

TELE_USER_NAME=BUYERUSERNAME TELE_USER_PASSWORD=API-KEY node app.js

Push to Heorku


- git clone the repo
- create app on heroku
- heroku git:remote -a app-name (check this on heroku page)
- git push heroku master
- set config vars on heroku
