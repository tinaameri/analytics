#!/bin/bash
cd ./back
npm run build &
npm run develop &

cd ../front
npm run dev 
