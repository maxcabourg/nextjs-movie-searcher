FROM node:alpine

ENV NEXT_PUBLIC_OMDB_API_KEY default

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src

RUN npm install

EXPOSE 3000
CMD npm run build && npm run start