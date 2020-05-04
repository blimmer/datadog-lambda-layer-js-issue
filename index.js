const datadog = require('datadog-lambda-js');

export const handler = datadog(async (event) => {
  throw new Error("Unimplemented!");
});
