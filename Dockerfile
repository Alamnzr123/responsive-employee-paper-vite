# Multi-stage Dockerfile for building and serving the Vite React app
# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
COPY yarn.lock* ./
RUN apk add --no-cache python3 make g++ || true
RUN npm ci --omit=dev

# Copy source and build
COPY . .
RUN npm run build

# Production stage - serve with nginx
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html

# Remove default nginx config and add a basic one for SPA routing
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/app.conf

EXPOSE 80
CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]
