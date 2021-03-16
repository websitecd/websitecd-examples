FROM node:14 AS stage1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src/*.js ./

CMD [ "node", "index.js" ]


# prod stage
FROM node:14-slim

WORKDIR /work/
RUN chown 1001 /work \
    && chmod "g+rwX" /work \
    && chown 1001:root /work

COPY --from=stage1 --chown=1001:root /usr/src/app /work

USER 1001

CMD [ "node", "index.js" ]
