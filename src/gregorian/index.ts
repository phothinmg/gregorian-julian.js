import ifpos from "../ifpos";
import ifnav from "../ifnav";
/**
 * Converts a Julian Day (JD) to a Gregorian date and time.
 * ---
 *
 * @param jd - The Julian Day to convert.
 * @returns An object containing the year, month, day, hour, minute, and second of the Gregorian date and time at UT.
 *
 * @example
 * const jd = 2459449.5;
 * const result = toGregorian(jd);
 * console.log(result); // Output: { year: 2021, month: 8, day: 23, hour: 0, minute: 0, second: 0 }
 * 
 */
export default function toGregorian(jd: number) {
  const jj = ifpos(jd);
  const kk = ifnav(jd);
  let year, month, day, hour, minute, second;
  if (jd > 0) {
    year = jj.year;
    month = jj.month;
    day = jj.day;
    hour = jj.hour;
    minute = jj.minute;
    second = jj.second;
  } else {
    year = kk.year;
    month = kk.month;
    day = kk.day;
    hour = kk.hour;
    minute = kk.minute;
    second = kk.second;
  }
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
  };
}
