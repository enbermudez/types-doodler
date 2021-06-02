---
sidebar_position: 2
---

# Strings

## weird-case

Transform the supplied string to weird-casing.

### Usage

```js
const td = require('types-doodler');

const options = { str: 'this-is-so-weird', separator: '-' };

const weird = td.strings.weirdCase(options);

console.log(weird); // ThIs-Is-So-WeIrD
```

### Options

| Property      | Description                                  | Type       | Default | Required           |
| ------------- | -------------------------------------------- | ---------- | ------- | :----------------: |
| `str`         | String to be edited.                         | `string`   |         | :heavy_check_mark: |
| `separator`   | Character used as a separator in the string. | `string`   | ` `     |                    |
