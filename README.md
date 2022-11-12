# deploying in github pages
`npm run deploy`
Settings -> pages -> custom domain -> "antonirvold.com"

# deploying in google cloud
```
git pull
npm i
npm run build
gcloud app deploy
```
```
git pull
gcloud run deploy
```
35.198.144.234

# from docker
docker build ./frontend -t web
docker run -p 3000:3000 web

# from docker-compose
docker-compose up

