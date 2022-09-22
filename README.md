# Performance Testing

To get up and running quickly open in `devcontainer` within VS Code (Does not include git integration as of yet. You will need to commit outside of devcontainer).

## Environment Variables

* `ENDPOINT`: API endpoint to test, such as <https://api.com>.

## Running test suites

There are 2 types of tests set to run.

The tests are `smoke.js` and `stress.js`, to execute them use the following syntax, replacing smoke.js with the script you want to run.

`k6 run -e ENDPOINT=https://endpoint-here smoke.js`

## Data

Data is represented by json files, within the `data` directory, which are further split by environment name, for example test accounts are stored within `data/dev/users.js` will be loaded when the environment variable `ENVIRONMENT` is set to `dev`.
