---
sidebar_position: 1
---

# Getting Started

Types Doodler is an utility library filled with non-common (and some random) utils for data manipulation.

## Installation

### Yarn

```bash
yarn add types-doodler
```

### npm

```bash
npm install types-doodler
```

## Usage

Import types-doodler wherever you want:

```js
const td = require('types-doodler');

// or

import td from 'types-doodler';
```

Start using the provided utils:

```js
const random = types.arrays.random({ array: [1, 2, 3, 4, 5] quantity: 2 });

console.log(random);

// output: [1, 5]
```
