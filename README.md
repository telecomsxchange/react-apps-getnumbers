# React Application Utilizes the GET Test Numbers API 

LIVE DEMO: https://tools.telecomsxchange.com 


# Backend SERVER APP

Local Setup

- Clone the project
- run command: yarn 
- run command: TELE_USER_NAME=BUYERUSERNAME TELE_USER_PASSWORD=API-KEY node app.js
- run command: yarn start

* Deploy to Heorku


- git clone the repo
- cd /react-apps-getnumbers
- create app on heroku http://heroku.com 
- heroku git:remote -a app-name (check this on heroku page)
- git push heroku master
- set config vars on heroku 

In Terminal:
Command: heroku config:set TELE_USER_NAME={TelecomsXchange Username}
Command: heroku config:set TELE_USER_PASSWORD={TelecomsXChange API Key}

To make sure variables are correct set:

run command: heroku config



# FRONTEND APP

1. create .env by copying .env.example 
2. Set the backend environment variable URl (For the backend)


* run this command or put this in package.json


* Deploy Front end to Netlify

- cd to the project root
- Update the .env URL variable to the public backend URL
- run command: yarn
- run command: yarn build
- cd build
- Deploy to Netlify


# Rebranding

Sample Rebranding: https://tawfeer.telecomsxchange.com 

To rebrand this app using your logo and own favicon, follow below steps:

- rename your company logo to logo.png
- drag and drop it to the src folder
- generate a favicon from your logo at http://favicon-generator.org
- download favicon and rename it to favicon.ico 
- drag and drop favicon.ico in /public folder
- run command: yarn build
- deploy to Netlify 












