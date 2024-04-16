### Converting Julian and Gregorian dates to each other.



**_ESM only_**

##### **_This package assumes use of the Gregorian calendar and only works correctly for dates after 1858._**

---

#### Install

```bash
npm i gregorian-julian.js
```

```bash
pnpm i gregorian-julian.js
```

```bash
yarn add gregorian-julian.js
```

---

#### Calculates the Julian Day (JD) for a given date.

Before diving into the code, let's understand how to calculate the Julian Day (JD) for a given Gregorian date. The following JavaScript function demonstrates this conversion using the `gregorian-julian.js` library.

```javascript
import { toJD } from "gregorian-julian.js";
function calculateJulianDay(year, month, day) {
  try {
    const julianDay = toJD(year, month, day);
    console.log(julianDay);
    return julianDay;
  } catch (error) {
    console.error("Error converting date to Julian Day:", error);
  }
}
const julianDay = calculateJulianDay(2022, 10, 15);
// Output: 2459867.5
```

$$ c_0 = \lfloor \frac{month - 3}{12} \rfloor $$

---

#### Converts a Julian Day (JD) to a Gregorian date and time

Now, let's see how we can convert a Julian Day (JD) back to a Gregorian date. The following function uses the `gregorian-julian.js` library to perform this conversion and prints the result.

```javascript

import { toGregorian } from "gregorian-julian.js";
function convertJDToGregorian(jd) {
  const result = toGregorian(jd);
  console.log(`Converted Date: ${result.year}-${result.month}-${result.day} ${result.hour}:${result.minute}:${result.second}`);
  return result;
}
const jd = 2459449.5;
const gregorianDate = convertJDToGregorian(jd);
// Output: Converted Date: 2021-8-23 0:0:0

```

---
#### Test and Coverage

Tested with Jest and checked with online converter of aavso, https://www.aavso.org/jd-calculator.

The negative values of JD, before 1 Jan -4712, are considered experimental.

[Coverage report](https://phothinmg.github.io/gregorian-julian.js/coverage/index.html)



![Functions Coverage Badge](https://raw.githubusercontent.com/phothinmg/gregorian-julian.js/main/docs/coverage/badge-functions.svg "Functions Coverage")
![Branches Coverage Badge](https://raw.githubusercontent.com/phothinmg/gregorian-julian.js/main/docs/coverage/badge-branches.svg "Branches Coverage")
![Lines Coverage Badge](https://raw.githubusercontent.com/phothinmg/gregorian-julian.js/main/docs/coverage/badge-lines.svg "Lines Coverage")
![Statements Coverage Badge](https://raw.githubusercontent.com/phothinmg/gregorian-julian.js/main/docs/coverage/badge-statements.svg "Statements Coverage")


