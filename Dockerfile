FROM  node:20-alpine

WORKDIR /usr/
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM  node:20-alpine
WORKDIR /usr/
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /usr/dist .
EXPOSE 3000
CMD node main.js