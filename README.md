# playwright-acme-test

## Install

`npm install`

## Run

`npm run test` \
`npm run test -- -p chromium` \
`npm run test -- -p firefox` \

# Initial setup

Commands to run:

    npm init playwright@latest
    npm i @cucumber/cucumber
    npm i typescript
    npm i ts-node

Framework setup
    
    1. Create a feature file 
    2. Create a hooks.ts file to run before and after steps for all features (init browser + page)
    3. Create a cucumber.mjs file

## Environment variable setup

Create a file in root called .env and add the following:

TEST_KEY=123456789

TODO

Clean up base url implementation
Add screenshoting on fail support
Usage of world params 

