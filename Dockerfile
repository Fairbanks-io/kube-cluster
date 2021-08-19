# Base
FROM node:14-slim as base
ENV NODE_ENV=production
# RUN apt-get install whatever
RUN apt-get autoremove -y; apt-get autoclean; rm -rf /var/lib/{apt,dpkg,cache,log}/
# apt-get is unavailable after this point
EXPOSE 8080
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node . ./
RUN npm install --no-optional --silent && npm cache clean --force > "/dev/null" 2>&1

# Audit ENV
FROM base as audit
USER root
RUN npm audit --audit-level critical
ARG MICROSCANNER_TOKEN
ADD https://get.aquasec.com/microscanner /
RUN chmod +x /microscanner
RUN /microscanner $MICROSCANNER_TOKEN --continue-on-failure

# Production ENV
FROM base as prod
RUN ls -ltr /app
RUN cat /app/package.json
ENTRYPOINT ["npm", "run", "serve", "-- --port 8080", "--host 0.0.0.0"]