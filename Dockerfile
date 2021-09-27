FROM node:8

EXPOSE 5000
WORKDIR /srv

RUN chown node:node .
RUN npm i -g serve

USER node

COPY --chown=node:node package.json package-lock.json ./
RUN npm install

COPY --chown=node:node ./ ./

RUN npm run build

CMD serve dist
