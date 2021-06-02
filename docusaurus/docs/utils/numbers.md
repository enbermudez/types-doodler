---
sidebar_position: 2
---

# Numbers

## palindrome

Checks whether the provided number is a palindrome or not.

```js
const td = require('types-doodler');

const options = { num: 101 };

const palindrome = td.numbers.palindrome(options);

console.log(palindrome); // true
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `num`         | Number to be checked.                        | `number`   |         | :heavy_check_mark: |

## prime

Checks whether the provided number is a prime number or not.

```js
const td = require('types-doodler');

const options = { num: 5 };

const prime = td.numbers.prime(options);

console.log(prime); // true
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `num`         | Number to be checked.                        | `number`   |         | :heavy_check_mark: |
