#!bin/bash
cd client
npm start
cd ../server

eslint ./ && babel-node app
