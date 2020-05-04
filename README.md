# datadog-lambda-layer-js 2.23.0 issue

To reproduce the problem:

1. Make sure you're using the current LTS version of node `nvm use` or check that `node --version` reports 12.16.3
1. Run `npm ci` to install dependencies
1. Run `npm run build` to see the error.

You can see that this is working with 2.22.0 by:

1. Update `package.json`'s `datadog-lambda-js` value to `2.22.0`.
1. Run `npm install` to get the new version
1. Run `npm run build`. Note that it's successful.
