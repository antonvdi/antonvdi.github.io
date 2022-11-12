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

# from docker
docker build ./frontend -t web
docker run -p 3000:3000 web

# from docker-compose
docker-compose up