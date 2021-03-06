#!/bin/sh
BLACK='\033[0;30m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
GRAY='\033[0;37m'
NC='\033[0m'
# echo "remove utils"
# npm remove skylark-utils
# echo "remove langx"
# npm remove skylark-langx
# echo "install utils"
# npm install skylark-utils
# echo "install langx"
# npm install skylark-langx
# echo "run build"
# cd build; gulp
# get line
line=$(sed -n '/\([[:space:]]*\"version\":[[:space:]]*\"\)[0-9]*.[0-9]*.[0-9]*\"[[:punct:]]/p' package.json)
echo "current version is: ${RED}`echo "$line" | egrep -o '[0-9]+.[0-9]+.[0-9]+'`${NC}"
if read -p "Please enter version number: " version; then
  sed -i '' "s/\([[:space:]]*\"version\":[[:space:]]*\"\)[0-9]*.[0-9]*.[0-9]*\"[[:punct:]]/\1${version}\",/1" package.json
fi

echo "git commit"
git pull origin master
git add .
if read -p "the commit msg: " msg; then
  git commit -m "${msg}"
  git push origin master
fi
echo "npm publish"
npm publish
echo "change package.json's ${RED}version number${NC} and commit the changes, then publish with ${ORANGE}npm publish";
