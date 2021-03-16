# dayjs-plugin-strftime

[![GitHub last commit](https://img.shields.io/github/last-commit/thomas9911/dayjs-plugin-strftime)](https://github.com/thomas9911/dayjs-plugin-strftime)
[![npm](https://img.shields.io/npm/v/dayjs-plugin-strftime)](https://www.npmjs.com/package/dayjs-plugin-strftime)

Adding strftime to day js.

It is just a dayjs wrapper around [strftime](https://github.com/samsonjs/strftime). Go there about customization

## examples

```js
const dayjs = require("dayjs");
const strftime = require("dayjs-plugin-strftime");

dayjs.extend(strftime);

// this can be any dayjs object
let now = dayjs();

// 2021-06-07 12:01:45
now.strftime("%F %T");
```

localization is done by:

```js
const dayjs = require("dayjs");
const strftime = require("dayjs-plugin-strftime");

dayjs.extend(strftime);

let now = dayjs();

// 25 januari, 2019 00:00:00
now.strftime("%d %B, %Y %H:%M:%S", "nl_NL");
```
