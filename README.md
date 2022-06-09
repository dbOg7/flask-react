# flask-react

# Objectif du projet:

- Faire un api avec les frameworks Flask (en backend) et React (en frontend)

- Afficher Hello World !

# Installation des modules frontend

# Installer nodejs & npm

# windows

https://nodejs.org/en/

# linux

- installer nodejs et npm for linux

https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/

# Installer un environnement virtuel
# Windows

py -m pip install virtualenv

py -m virtualenv venv

.\venv\Scripts\activate

# Linux

pip install virtualenv 

virtualenv venv

source venv/bin/activate

# Installation des modules backend

cd flask-react-app

cd api

pip install -r requirements.txt

# Configurer python-dotenv

dans le fichier requirements.txt se trouve python-dotenv

ce qui vaut a faire un pip install python-dotenv

A la racine de votre git créer un fichier .env

et coller

FLASK_APP=app.py
FLASK_ENV=development
DEBUG = True

# demarrer le projet

# on commence par le backend

- cd api 
- flask run

# on fini par le frontend

 cd flask-react-app
 npm run start

# a savoir

- dans flask-react-app se trouve le fichier package.json
-ligne 4 "proxy":"http://localhost:5000", permet de liée les deux framework en mettant react à l'ecoute.

- api.py a une fonction retourne un dictionnaire a l'url /data

- App.js est à l"écoute de cette url (/data)