FROM cypress/base:16

RUN mkdir writing-your-first-test

COPY package.json /writing-your-first-test

COPY yarn.lock /writing-your-first-test

RUN cd writing-your-first-test && yarn install