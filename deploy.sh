yarn build --base ./
cd dist
git init
git add .
git commit -m deploy
git remote add origin git@gitee.com:peachDDDADAD/large-screen.git
git push -u -f origin master
cd ..