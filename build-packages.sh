#!/bin/bash

cd ../core
npm install
npm run build

cd ../api
npm install
npm run build

cd ../mongoose
npm install
npm run build

cd ../demo
npm start