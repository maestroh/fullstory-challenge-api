# fullstory-challenge

This repository fulfills the FullStory JS API integration. 

## Prerequisites
### Auth0

1. Sign up for an Auth0 account here: https://auth0.com/
2. Go to the `Clients` menu and select the `Default App`.
3. Take note of the `Client ID` and  `Client Domain`. You'll need these values for another step.

### Yarn

Follow the instructions at https://yarnpkg.com/en/docs/install to setup `yarn` as your package manager.


## Steps to run this app
1. Clone the repo locally
2. `cd` into the `web` folder
3. Create a config.json file
4. Add a JSON object with in the file and populate the two fields from your auth0 account.
```
{
  "AUTH0_CLIENT_ID": "{Enter your client ID here}",
  "AUTH0_CLIENT_DOMAIN": "{Enter your client domain here}"
}
```
5. Type `yarn` to install dependencies
6. Start coding in the `pages` folder
