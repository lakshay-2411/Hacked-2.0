#!/bin/sh

echo "Switching to branch bg"
git checkout bg 

echo "Building app"
yarn build

echo "Deploying files to server"
rsync -avP dist/ root@172.104.206.203:/var/www/172.104.206.203/
echo "Deployment complete"
