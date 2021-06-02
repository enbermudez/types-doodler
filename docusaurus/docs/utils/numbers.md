---
sidebar_position: 2
---

# Numbers

## palindrome

Checks wheter the provided number is a palindrome or not.

```js
const td = require('types-doodler');

const options = { num: 101 };

const palindrome = td.numbers.palindrome(options);

console.log(palindrome); // true
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `num`         | Number to be checked.                        | `number`   |         | :heavy_check_mark: |
