FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Add health check and use npm start
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD node healthcheck.js
CMD ["npm", "start"]