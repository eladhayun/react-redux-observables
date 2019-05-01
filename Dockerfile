# Stage 1 - the build process
FROM node:10.15.3 as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN npm install --production
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.15.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
