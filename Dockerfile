FROM node:18-alpine as base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm install
COPY --chown=node:node . ./
USER node
CMD ["node", "server"]