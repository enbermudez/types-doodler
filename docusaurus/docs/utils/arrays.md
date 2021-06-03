---
sidebar_position: 1
---

# Arrays

## random

Get one or more random elements from a provided array. Those returned elements could be repeated.

```js
const td = require('types-doodler');

const options = { arr: [1, 2, 3, 4, 5], qty: 3 };

const randoms = td.arrays.random(options);

console.log(randoms); // [1, 1, 4]
```

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `arr`         | Source array.                                | `array`    |         | :heavy_check_mark: |
| `qty`         | Amount of random elements to be returned.    | `number`   | `1`     |                    |
