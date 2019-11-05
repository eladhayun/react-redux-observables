# Stage 1 - the build process
FROM node:12.13.0 as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN npm install --production --silent
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.17.5-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
