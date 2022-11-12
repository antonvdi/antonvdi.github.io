# deploying in github pages
`npm run deploy`
Settings -> pages -> custom domain -> "antonirvold.com"

# deploying in google cloud
```
git pull
cd client
npm i
npm run build
gcloud app deploy app.yml
gcloud app browse
```

```
git pull
cd server
pip install -r requirements.txt
gcloud app deploy api.yml
gcloud app browse
```