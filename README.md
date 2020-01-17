# React Application Utilizes the GET Test Numbers API 

LIVE DEMO: https://tools.telecomsxchange.com 


# Backend SERVER APP

Local Setup

  set PROCESS.ENV VARIABLE
    TELE_USER_NAME, TELE_USER_PASSWORD

* run this command or put this in package.json

TELE_USER_NAME=BUYERUSERNAME TELE_USER_PASSWORD=API-KEY node app.js

*Push to Heorku


- git clone the repo
- create app on heroku
- heroku git:remote -a app-name (check this on heroku page)
- git push heroku master
- set config vars on heroku 

Command: heroku config:set TELE_USER_NAME={TelecomsXchange Username}
Command: heroku config:set TELE_USER_PASSWORD={TelecomsXChange API Key}

Make sure variables are correct set:

Command: heroku config



# FRONTEND APP

1. create .env by copying .env.example 
2. Set the backend environment variable URl (For the backend)


*run this command or put this in package.json


*Deploy Front end to Netlify

- cd to the project root
- Update the .env URL variable to the public backend URL
- run command: yarn
- run command: yarn build
- cd build
- Deploy to Netlify








