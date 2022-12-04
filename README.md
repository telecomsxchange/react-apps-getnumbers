This React Application Utilizes this [TCXC API](https://documenter.getpostman.com/view/5344044/SVtbPk6K?version=latest#e3ab2e21-a698-452f-b0ef-d59872dbafba)

LIVE DEMO: https://tools.telecomsxchange.com 

[![Netlify Status](https://api.netlify.com/api/v1/badges/04dee1e6-948c-4993-b4a2-9199e0c51814/deploy-status)](https://app.netlify.com/sites/tcxc-website/deploys)


# Backend SERVER APP

**Local Setup**

```bash  
git clone the https://github.com/telecomsxchange/react-apps-getnumbers 
cd /react-apps-getnumbers
yarn
TELE_USER_NAME=BUYERUSERNAME TELE_USER_PASSWORD=API-KEY node app.js
yarn start

```


**Deploy to Heorku**


```bash  
git clone the https://github.com/telecomsxchange/react-apps-getnumbers 
cd /react-apps-getnumbers

```
- create app on heroku http://heroku.com 
- heroku git:remote -a app-name (check this on heroku page)
- git push heroku master
- set config vars on heroku 

In Terminal:
Command: `heroku config:set TELE_USER_NAME={TelecomsXchange Username}`
Command: `heroku config:set TELE_USER_PASSWORD={TelecomsXChange API Key}`

To make sure variables are correct set:

run command: `heroku config`



# FRONTEND APP

1. create .env by copying .env.example 
2. Set the backend environment variable URl (For the backend)


* run this command or put this in package.json


* Deploy Front end to Netlify

- cd to the project root
- Update the `.env` URL variable to the public backend URL
- run command: `yarn`
- run command: `yarn build`
- `cd build`
- Deploy build to Netlify 


# Rebranding


To rebrand this app using your logo and own favicon, follow below steps:

- rename your company logo to logo.png
- drag and drop it to the src folder
- generate a favicon from your logo at http://favicon-generator.org
- download favicon and rename it to favicon.ico 
- drag and drop favicon.ico in /public folder
- run command: yarn build
- deploy to Netlify 












