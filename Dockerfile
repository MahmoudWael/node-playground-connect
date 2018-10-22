FROM node
COPY    . /var/www
WORKDIR /var/www
RUN npm install
RUN npm install -g nodemon
EXPOSE 3000
ENTRYPOINT ["npm", "start"]