---
sidebar_position: 3
---

# Strings

## palindrome

Checks whether the provided string is a palindrome or not.

```js
const td = require('types-doodler');

const options = { str: 'madam' };

const palindrome = td.strings.palindrome(options);

console.log(palindrome); // true
```

| Property      | Description                                               | Type      | Default | Required           |
| ------------- | --------------------------------------------------------- | --------- | ------- | :----------------: |
| `str`         | String to be checked.                                     | `string`  |         | :heavy_check_mark: |

---

## reverse

Reverse the provided string as a whole or word by word.

```js
const td = require('types-doodler');

const options = { str: 'This-is-entirely-reversed', whole: true, separator: '-' };

const reverse = td.strings.reverse(options);

console.log(reverse); // desrever-yleritne-si-sihT
```

| Property      | Description                                               | Type      | Default | Required           |
| ------------- | --------------------------------------------------------- | --------- | ------- | :----------------: |
| `str`         | String to be edited.                                      | `string`  |         | :heavy_check_mark: |
| `whole`       | Whether the string should be separated as a whole or not. | `boolean` | `false` |                    |
| `separator`   | Character used as a separator in the string.              | `string`  | ` `     |                    |

---

## weird-case

Transform the supplied string to weird-casing.

```js
const td = require('types-doodler');

const options = { str: 'this-is-so-weird', separator: '-' };

const weird = td.strings.weirdCase(options);

console.log(weird); // ThIs-Is-So-WeIrD
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `str`         | String to be edited.                         | `string`   |         | :heavy_check_mark: |
| `separator`   | Character used as a separator in the string. | `string`   | ` `     |                    |
