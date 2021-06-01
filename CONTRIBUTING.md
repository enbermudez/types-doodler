# Contributing to types-doodler

Do you any utility in mind? Go ahead and create a PR with the necessary code and I'll check it out.

## Setting Up a Local Copy

1. Fork the repo.
2. Run `yarn` in the root `types-doodler` folder.

Once it is done, you can modify any existing util or create a new one.

## Developing a new util

- Create a new branch from `develop` with the pattern: `feature/util-name`
- Add the utils code: `src/type/util-name.js`
- Add the utils test: `tests/type/util-name.test.js`
- Create a new pull request from `fork/branch` to `types-doodler/develop`

## Testing

Every util must be fuly tested. You can create a test on `tests/type/util-name` and run tests by using `yarn test`.
