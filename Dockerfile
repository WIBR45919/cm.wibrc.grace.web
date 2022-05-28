FROM node:16.13.1-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY dist/ ./

EXPOSE 8080
CMD [ "http-server", "." ]