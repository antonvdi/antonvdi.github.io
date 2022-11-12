# deploying in github pages
`npm run deploy`
Settings -> pages -> custom domain -> "antonirvold.com"

# deploying in google cloud
```
git pull
cd client
npm i
npm run build
gcloud app deploy
gcloud app browse
```