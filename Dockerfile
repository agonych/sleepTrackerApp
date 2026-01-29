# Use recent stable Node.js LTS version on Alpine Linux
FROM node:24-alpine3.22

# Set working directory
WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application source (excluding files in .dockerignore)
COPY . .

# Expose application port
EXPOSE 3000

# Start the server
CMD ["node", "src/server.js"]
