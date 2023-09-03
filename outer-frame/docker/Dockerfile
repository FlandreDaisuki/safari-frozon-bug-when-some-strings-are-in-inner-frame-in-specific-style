FROM ubuntu:22.04

WORKDIR /root/app

RUN <<EOT bash
  set -ex
  apt-get update
  apt-get install -y curl build-essential
  curl -sL https://deb.nodesource.com/setup_16.x | bash -
  apt-get update
  apt-get install -y nodejs
EOT

RUN <<EOT bash
  set -ex
  npm install -g pnpm
EOT

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .

CMD [ "/root/app/docker/run.sh" ]
