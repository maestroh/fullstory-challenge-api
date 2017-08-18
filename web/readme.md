## Overview
Basic template for building front end web apps using Next.js and auth0-lock. 

## Steps to get setup
1. Create a config.json file
2. Add a JSON object with in the file and populate the two fields from your auth0 account.
```
{
  "AUTH0_CLIENT_ID": "{Enter your client ID here}",
  "AUTH0_CLIENT_DOMAIN": "{Enter your client domain here}"
}
```
3. Type `yarn` to install dependencies
4. Start coding in the `pages` folder

## More Info
For more info, refer to the [auth0 docs](https://auth0.com/docs/quickstart/spa) and [Next.js](https://github.com/zeit/next.js/). The integration in this boilerplate was heavily, heavily influenced by the [next.js-auth0 repo](https://github.com/luisrudge/next.js-auth0).
