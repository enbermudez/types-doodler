---
sidebar_position: 3
---

# Strings

## anagram

Check if a string is an anagram of another string.

```js
const td = require('types-doodler');

const options = { string: 'abbccc' };

const anagram = td.strings.anagram({ str1: 'listen', str2: 'silent' });

console.log(anagram); // true
```

| Property      | Description                                               | Type      | Default | Required           |
| ------------- | --------------------------------------------------------- | --------- | ------- | :----------------: |
| `str1`        | Target string 1.                                          | `string`  |         | :heavy_check_mark: |
| `str2`        | Target string 2.                                          | `string`  |         | :heavy_check_mark: |
| `insensitive` | Whether it should worry about casing or not.              | `boolean` | `false` |                    |

---

## charmap

Returns a charmap (object) of the provided string.

```js
const td = require('types-doodler');

const options = { string: 'abbccc' };

const charmap = td.strings.charmap(options);

console.log(charmap); // { a: 1, b: 2, c: 3 }
```

| Property      | Description                                               | Type      | Default | Required           |
| ------------- | --------------------------------------------------------- | --------- | ------- | :----------------: |
| `string`      | String to be checked.                                     | `string`  |         | :heavy_check_mark: |
| `insensitive` | Whether it should worry about casing or not.              | `boolean` | `false` |                    |

---

## palindrome

Checks whether the provided string is a palindrome or not.

```js
const td = require('types-doodler');

const options = { string: 'madam' };

const palindrome = td.strings.palindrome(options);

console.log(palindrome); // true
```

| Property      | Description                                               | Type      | Default | Required           |
| ------------- | --------------------------------------------------------- | --------- | ------- | :----------------: |
| `string`      | String to be checked.                                     | `string`  |         | :heavy_check_mark: |

---

## reverse

Reverse the provided string as a whole or word by word.

```js
const td = require('types-doodler');

const options = { string: 'This-is-entirely-reversed', whole: true, separator: '-' };

const reverse = td.strings.reverse(options);

console.log(reverse); // desrever-yleritne-si-sihT
```

| Property      | Description                                               | Type      | Default | Required           |
| ------------- | --------------------------------------------------------- | --------- | ------- | :----------------: |
| `string`      | String to be edited.                                      | `string`  |         | :heavy_check_mark: |
| `whole`       | Whether the string should be separated as a whole or not. | `boolean` | `false` |                    |
| `separator`   | Character used as a separator in the string.              | `string`  | ` `     |                    |

---

## weird-case

Transform the supplied string to weird-casing.

```js
const td = require('types-doodler');

const options = { string: 'this-is-so-weird', separator: '-' };

const weird = td.strings.weirdCase(options);

console.log(weird); // ThIs-Is-So-WeIrD
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `string`      | String to be edited.                         | `string`   |         | :heavy_check_mark: |
| `separator`   | Character used as a separator in the string. | `string`   | ` `     |                    |
