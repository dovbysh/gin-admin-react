FROM node:13-stretch as build

RUN  apt update && apt install -y --no-install-recommends \
      apt-transport-https \
      ca-certificates

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt update && apt install -y --no-install-recommends \
      yarn

RUN yarn global add umi
