---
sidebar_position: 1
---

# Arrays

## equals

Check if two arrays are equal.

```js
const td = require('types-doodler');

const options = { array1: [1, 2, 3, 4, 5], array2: [3, 4, 5, 1, 2], ordered: true };

const equals = td.arrays.equals(options);

console.log(equals); // true
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `array1`      | First array.                                 | `array`    |         | :heavy_check_mark: |
| `array2`      | Second array.                                | `array`    |         | :heavy_check_mark: |
| `ordered`     | Sorts both arrays before comparison.         | `boolean`  | `false` |                    |

---

## random

Get one or more random elements from a provided array. Those returned elements could be repeated.

```js
const td = require('types-doodler');

const options = { array: [1, 2, 3, 4, 5], quantity: 3 };

const random = td.arrays.random(options);

console.log(random); // [1, 1, 4]
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `array`       | Source array.                                | `array`    |         | :heavy_check_mark: |
| `quantity`    | Amount of random elements to be returned.    | `number`   | `1`     |                    |

---

## shuffle

Shuffles the provided array.

```js
const td = require('types-doodler');

const options = { array: [1, 2, 3, 4, 5] };

const shuffle = td.arrays.shuffle(options);

console.log(shuffle); // [4, 2, 3, 5, 1]
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `array`       | Array to be shuffled.                        | `array`    |         | :heavy_check_mark: |
