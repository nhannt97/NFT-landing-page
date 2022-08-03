Install on ubuntu server
1. install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
2. install node
nvm install 14
3. install pm2
npm install pm2 -g
4. clone / download project
git clone https://github.com/nhannt97/NFT-landing-page.git
5. cd NFT-landing-page
6. build client code
cd client
npm i
npm run build
6. install server
cd server
npm i
7. run server with pm2
pm2 start index.js

