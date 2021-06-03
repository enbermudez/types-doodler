---
sidebar_position: 1
---

# Arrays

## random

Get one or more random elements from a provided array. Those returned elements could be repeated.

```js
const td = require('types-doodler');

const options = { array: [1, 2, 3, 4, 5], quantity: 3 };

const randoms = td.arrays.random(options);

console.log(randoms); // [1, 1, 4]
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `array`       | Source array.                                | `array`    |         | :heavy_check_mark: |
| `quantity`    | Amount of random elements to be returned.    | `number`   | `1`     |                    |
