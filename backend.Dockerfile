# Dockerfile
FROM python:3.7-alpine

# set working directory
WORKDIR /app

# add and install requirements
COPY server/requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# add app
COPY server /app

# run server
CMD ["python", "app.py"]
